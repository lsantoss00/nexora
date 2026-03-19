import Column from "@/components/core/column";
import Flex from "@/components/core/flex";
import { cn } from "@/utils/cn";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const LogoArea = ({ className }: { className?: string }) => {
  return (
    <Flex
      className={cn(
        `z-10 items-center w-full max-w-md flex-row lg:flex-col mb-8 gap-4 ${className}`,
      )}
    >
      <Flex className="w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-lg bg-primary">
        <span className="text-white font-display font-bold text-xl lg:text-2xl">
          A+
        </span>
      </Flex>
      <h2 className="font-display text-xl lg:text-4xl font-bold text-foreground lg:text-white">
        Aprimora+
      </h2>
      <p className="hidden lg:block text-primary-foreground/70 text-center text-lg leading-relaxed">
        Sua plataforma de cursos online, onde o conhecimento encontra a
        inovação.
      </p>
    </Flex>
  );
};

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <Flex className="min-h-screen w-full">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-primary relative overflow-hidden items-center justify-center p-12">
        <LogoArea />
      </div>
      <Column className="w-full lg:w-1/2 items-center justify-center p-6 sm:p-12 bg-background">
        <LogoArea className="lg:hidden" />
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
