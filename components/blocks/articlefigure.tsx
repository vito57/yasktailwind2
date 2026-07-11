//ARTICLE IMAGE
interface ArticleFigureProps {
  figcaption?: string;
  className?: string;
  children: React.ReactNode;
}
export function ArticleFigure({
  figcaption,
  children,
  className,
}: ArticleFigureProps) {
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