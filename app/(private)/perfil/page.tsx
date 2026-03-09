import SignOutButton from "@/app/(private)/perfil/components/sign-out-button";
import Row from "@/components/core/row";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil",
};

export default function ProfilePage() {
  return (
    <Row className="items-center justify-center px-4 gap-2">
      <h1>Perfil</h1>
      <SignOutButton />
    </Row>
  );
}
