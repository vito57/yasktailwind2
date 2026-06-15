interface TextProps {
    title?: string;
    children: React.ReactNode;
}
export function TextBlock({ title, children }: TextProps) {
    return (
        <dl className="flex flex-col md:flex-row gap-2">
            {title && <dt className="basis-1/4 font-bold">{title}</dt>}
            <dd className={` ${title ? false : "ml-auto"} text-pretty basis-3/4`}>
                {children}
            </dd>
        </dl>
    );
}