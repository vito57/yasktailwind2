//SECTION section layout
interface SectionProps {
  className?: string;
  fluid?: boolean;
  id?: string;
  children: React.ReactNode;
}
export default function Section({
  children,
  fluid = false,
  className,
  id,
}: SectionProps) {
  const isFluid = fluid ? null : "container";
  return (
    <section className={`${className} ${isFluid}`} id={id}>
      {children}
    </section>
  );
}