import Image from "next/image";
import { BodyImage } from "../components/server";
export default function Page() {
  return (
    <div className="max-w-xl border-2 mx-auto my-0 border-amber-400">
      <p className="text-amber-400">Контейнер max-width 567пикс.</p>
      <p>
        Картинка в 400 пикс, меньше контейнера, не растягивается, при адаптиве
        сжимается
      </p>
      <Image
        alt="400"
        height={400}
        width={400}
        className="aspect-square object-cover"
        src="https://placehold.net/400x400.png"
      />
      <br />
      <p>
        картинка в 600 пикс, она больше контейнера, занимет вся его ширину не
        привышая ее
      </p>
      <Image
        alt="1000"
        height={600}
        width={800}
        src="https://placehold.net/600x800.png"
      />
      <br />
      <p>
        картинки в карусель. картинки разного формата с выравнивание по высоте.
      </p>
      <div className="flex flex-nowrap flex-row gap-1 overflow-y-scroll h-50">
        <Image
          alt="400"
          width={400}
          height={400}
          className="rounded-2xl object-fill h-full w-auto"
          src="https://placehold.net/400x400.png"
        />

        <Image
          alt="400"
          width={400}
          height={600}
          className="rounded-2xl object-fill h-full w-auto"
          src="https://placehold.net/400x600.png"
        />

        <Image
          alt="400"
          width={600}
          height={400}
          className="rounded-2xl object-fill h-full w-auto"
          src="https://placehold.net/600x400.png"
        />
        <Image
          alt="400"
          width={400}
          height={400}
          className="rounded-2xl object-fill h-full w-auto"
          src="https://placehold.net/400x400.png"
        />
        <Image
          alt="400"
          width={400}
          height={600}
          className="rounded-2xl object-fill h-full w-auto"
          src="https://placehold.net/400x600.png"
        />
        {/* <Image
          alt="400"
          height={400}
          width={400}
          className="rounded-2xl"
          src="https://placehold.net/400x400.png"
        /> */}
      </div>
    </div>
  );
}
