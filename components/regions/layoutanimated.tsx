//AnimatedLayout
interface LayoutAnimatedProps {
  className?: string;
  children: React.ReactNode;
}
export function LayoutAnimated({ children, className }: LayoutAnimatedProps) {
  return (
    <main className={`${className} animate-fadeIn text-base md:text-xl`}>
      {children}
    </main>
  );
}