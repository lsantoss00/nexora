import { ProfileType } from "@/app/(private)/perfil/types/profile-type";
import { createClient } from "@/libs/supabase/client";
import { User } from "@supabase/supabase-js";

interface GetUserProfileProps {
  userId: User["id"];
}

export async function getUserProfile({
  userId,
}: GetUserProfileProps): Promise<ProfileType> {
  const supabase = createClient();

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return profile;
}
