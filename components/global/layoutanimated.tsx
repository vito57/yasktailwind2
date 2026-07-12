//AnimatedLayout
interface LayoutAnimatedProps {
  className?: string;
  children: React.ReactNode;
}
export default function LayoutAnimated({ children, className="" }: LayoutAnimatedProps) {
  return (
    <main className={`animate-fadeIn ${className}`}>
      {children}
    </main>
  );
}