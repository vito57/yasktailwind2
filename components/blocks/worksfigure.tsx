//ARTICLE IMAGE
interface WorksFigureProps {
  figcaption?: string;
  className?: string;
  children: React.ReactNode;
}
export default function WorksFigure({
  figcaption,
  children,
  className,
}: WorksFigureProps) {
  return (
    <figure className={className}>
      {children}
      {figcaption && (
        <figcaption className="text-sm mt-1">{figcaption}</figcaption>
      )}
    </figure>
  );
}
//END ARTICLE IMAGE