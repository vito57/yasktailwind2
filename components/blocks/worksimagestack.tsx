import WorksFigure from "./worksfigure";
import WorksImage from "./worksimage";

interface WorksImageStackProps {
    images: any;
    className?: string;
    height?: number;
    width?: number;
}

export default function WorksImageStack(props: WorksImageStackProps) {

    return (
        <div className="flex flex-col md:flex-row gap-5">
            {props.images.map((i: any) => (
                <div key={i.src} className="basis-auto md:basis-1/2">
                    <WorksFigure figcaption={i.caption}>
                        <WorksImage
                            src={i.src}
                            className={props.className}
                            height={props.height}
                            width={props.width}
                            alt={i.caption || i.src}
                        />
                    </WorksFigure>
                </div>

            ))}
        </div>
    );
}