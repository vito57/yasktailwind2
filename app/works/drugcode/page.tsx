import { AnimateLayout, Accordeon } from "../../components/client";
import Image from "next/image";
export default function Drugcode() {
  return (
    <AnimateLayout>
      <Image
        src="/works/drugcode/cover.png"
        width={1120}
        height={416}
        className="w-full mb-8 rounded"
        alt="Drugcode"
      />
      <Accordeon expanded={false} title="About" id="1">
        <p className="text-xl ">
          Редактор кода для создания нативных приложений на Айос, Андройд и Веб.
          Цель проекта обьединить в одном месте работу над приложением, от
          дизайна до программирования и тестирования, снизить порог входа для
          начинающих специалистов путем применения готовых паттернов и быстрого
          доступа к ресурсам.
        </p>
      </Accordeon>
      <Accordeon expanded={true} title="Branding" id="2">
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit unde
          nesciunt neque voluptates nulla nostrum eaque. Et optio similique
          recusandae non, ea velit dolores.
        </p>
      </Accordeon>
      <div className="flex flex-row gap-4 mb-8">
        <div className="basis-1/2">
          <figure>
            <Image
              src="/works/drugcode/brand.png"
              width={200}
              height={200}
              className="w-full"
              alt="sdd"
            />
            <figcaption className="text-sm">
              A caption for the above image.
            </figcaption>
          </figure>
        </div>
        <div className="basis-1/2">
          <figure>
            <Image
              src="/works/drugcode/brand-guide.png"
              width={200}
              height={200}
              className="w-full"
              alt="sdd"
            />
            <figcaption className="text-sm">
              A caption for the above image.
            </figcaption>
          </figure>
        </div>
      </div>
      <Accordeon expanded={true} title="UX design" id="3">
        <p className={`text-xl mb-6 `}>
          Whenever users have to deal with forms on a page on mobile, consider
          replacing sticky menus with accordions. Virtual keyboards typically
          take up to 60% of the screen, and with a sticky bar in view, filling
          in a form quickly becomes nothing short of impossible.
        </p>
      </Accordeon>
      <div className="flex flex-row gap-4 mb-8">
        <div className="basis-1/2">
          <figure>
            <Image
              src="/works/drugcode/brand.png"
              width={200}
              height={200}
              className="w-full"
              alt="sdd"
            />
            <figcaption className="text-sm">
              A caption for the above image.
            </figcaption>
          </figure>
        </div>
        <div className="basis-1/2">
          <figure>
            <Image
              src="/works/drugcode/brand-guide.png"
              width={200}
              height={200}
              className="w-full"
              alt="sdd"
            />
            <figcaption className="text-sm">
              A caption for the above image.
            </figcaption>
          </figure>
        </div>
      </div>
      <figure>
        <Image
          src="/works/drugcode/brand-guide.png"
          width={200}
          height={200}
          className="w-full"
          alt="sdd"
        />
        <figcaption className="text-sm">
          A caption for the above image.
        </figcaption>
      </figure>
    </AnimateLayout>
  );
}
