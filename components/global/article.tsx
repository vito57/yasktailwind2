//ARTICLE
interface ArticleProps {
  className: string;
  children: React.ReactNode;
}
export default function Article({ children, className }: ArticleProps) {
  return <article className={`${className} mb-8`}>{children}</article>;
}
//END ARTICLE