"use client";

import { getUserProfile } from "@/app/(private)/perfil/services/get-user-profile";
import { ProfileType } from "@/app/(private)/perfil/types/profile-type";
import { queryClient } from "@/libs/tanstack-query/query-client";
import { User } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect } from "react";
import { createClient } from "../libs/supabase/client";

interface AuthContextType {
  profile: ProfileType | null;
  isLoadingAuth: boolean;
}

const AuthContext = createContext<AuthContextType>({
  profile: null,
  isLoadingAuth: true,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();

  const { data: user, isLoading: isLoadingUser } = useQuery<User | null>({
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    },
    queryKey: ["user"],
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
    refetchOnWindowFocus: true,
  });

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryFn: () => getUserProfile({ userId: user!.id }),
    queryKey: ["profile", user?.id],
    enabled: !!user?.id,
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    const {
      data: { subscription: authSubscription },
    } = supabase.auth.onAuthStateChange((event) => {
      const relevantAuthEvents =
        event === "SIGNED_IN" ||
        event === "SIGNED_OUT" ||
        event === "TOKEN_REFRESHED";

      if (relevantAuthEvents) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }

      if (event === "SIGNED_OUT") {
        queryClient.clear();
      }
    });

    return () => authSubscription.unsubscribe();
  }, [supabase]);

  const isLoadingAuth = isLoadingUser || (!!user && isLoadingProfile);

  return (
    <AuthContext.Provider
      value={{
        profile: profile ?? null,
        isLoadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
