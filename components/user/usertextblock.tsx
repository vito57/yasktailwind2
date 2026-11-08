interface UserTextProps {
  title?: string;
  children: React.ReactNode;
}
export default function UserTextBlock({ title, children }: UserTextProps) {
  return (
    <div className="gap-3 max-w-4xl flex flex-col mx-auto">
      {title && <h6 className="font-bold">{title}</h6>}
      <div>{children}</div>
    </div>
  );
}
