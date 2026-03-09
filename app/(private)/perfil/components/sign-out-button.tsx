"use client";

import { signOut } from "@/app/(public)/entrar/services/sign-out";
import Button from "@/components/core/button";
import { queryClient } from "@/libs/tanstack-query/query-client";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const { mutate: doSignOut, isPending: pendingDoSignOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.clear();

      router.push("/entrar");
    },
  });

  return (
    <Button
      type="button"
      variant="link"
      className="text-red-800 hover:text-red-500 w-fit px-1!"
      onClick={() => doSignOut()}
      disabled={pendingDoSignOut}
    >
      <LogOut />
    </Button>
  );
};

export default SignOutButton;
