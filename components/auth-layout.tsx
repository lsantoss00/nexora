"use client";

import { AnimatedThemeToggler } from "@/components/core/animated-theme-toggler";
import Column from "@/components/core/column";
import Flex from "@/components/core/flex";
import darkLogo from "@/public/images/logo-aprimora+.avif";
import whiteLogo from "@/public/images/white-logo-aprimora+.avif";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useSyncExternalStore } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  const { resolvedTheme } = useTheme();

  // prevent missmatch logo (hydratation)
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const logoSrc = mounted && resolvedTheme === "light" ? darkLogo : whiteLogo;

  return (
    <Flex className="min-h-screen w-full">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-primary relative overflow-hidden items-center justify-center p-12">
        <Flex className="z-10 items-center w-full max-w-md flex-col gap-4">
          <Image
            src={whiteLogo}
            alt="Aprimora+"
            priority
            unoptimized
            className="w-full h-full"
          />
          <p className="text-primary-foreground/70 text-center text-lg leading-relaxed">
            Sua plataforma de cursos online, onde o conhecimento encontra a
            inovação.
          </p>
        </Flex>
      </div>
      <Column className="relative w-full lg:w-1/2 items-center justify-center p-6 sm:p-12 bg-background">
        <div className="absolute top-4 right-4">
          <AnimatedThemeToggler />
        </div>
        <Flex className="lg:hidden items-center w-full max-w-md mb-8">
          <Image
            src={logoSrc}
            alt="Aprimora+"
            priority
            unoptimized
            className="h-10 w-auto"
          />
        </Flex>
        <div className="w-full max-w-md">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            {title}
          </h1>
          <p className="text-muted-foreground mb-8">{subtitle}</p>
          {children}
        </div>
      </Column>
    </Flex>
  );
};

export default AuthLayout;
