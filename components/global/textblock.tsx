interface TextProps {
    title?: string;
    children: React.ReactNode;
}
export default function TextBlock({ title, children }: TextProps) {
    return (
        <dl className="flex text-pretty flex-col md:flex-row gap-2">
            {title && <dt className="basis-1/4 font-bold">{title}</dt>}
            <dd className={` ${title ? false : "ml-auto"} basis-3/4`}>
                {children}
            </dd>
        </dl>
    );
}