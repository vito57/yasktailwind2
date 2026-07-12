//ARTICLE HEADER
interface WorksHeaderProps {
  className?: string;
  children: React.ReactNode;
}
export default function WorksHeader({ className, children }: WorksHeaderProps) {
  return (
    <header
      id="intro"
      className={`mb-8 pt-20 reletive ${className}`}
    >
      <div className="container">{children}</div>
    </header>
  );
}
//END ARTICLE HEADER