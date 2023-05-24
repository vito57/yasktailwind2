import { AnimateLayout, Accordeon } from "../../components/client";
import { Section, ArticleImageSection } from "../../components/server";
import Image from "next/image";
export default function Drugcode() {
  return (
    <AnimateLayout>
      <Section className="mb-8">
        <Image
          src="/works/drugcode/cover.png"
          width={1120}
          height={416}
          className="w-full mb-8 rounded"
          alt="Drugcode"
        />

        <div className="mx-auto max-w-screen-md">
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-xl ">
            Редактор кода для создания нативных приложений на Айос, Андройд и
            Веб. Цель - обьединить в одном месте работу над приложением, от
            дизайна до программирования и тестирования, снизить порог входа для
            начинающих специалистов путем применения готовых паттернов и
            быстрого доступа к ресурсам.
          </p>
        </div>
      </Section>
      <Section className="mb-8">
        <div className="mx-auto max-w-screen-md">
          <h2 className="text-xl font-bold ">Branding</h2>
          <p className="text-xl mb-8 opacity-80">
            Редактор кода для создания нативных приложений на Айос, Андройд и
            Веб.
          </p>
        </div>
        <ArticleImageSection
          data1={{ src: "/works/drugcode/brand.png", caption: "fasfas" }}
          data2={{ src: "/works/drugcode/brand-guide.png", caption: "fasfas" }}
        />
      </Section>
      <Section className="mb-8">
        <div className="mx-auto max-w-screen-md">
          <h2 className="text-xl font-bold ">UX design</h2>
          <p className="text-xl mb-8 opacity-80">
            Редактор кода для создания нативных приложений на Айос, Андройд и
            Веб.
          </p>
        </div>

        <ArticleImageSection
          data1={{ src: "/works/drugcode/brand.png", caption: "fasfas" }}
          data2={{ src: "/works/drugcode/brand-guide.png", caption: "fasfas" }}
        />
      </Section>
      <Section className="mb-8">
        <div className="mx-auto max-w-screen-md">
          <h2 className="text-xl font-bold ">UI design</h2>
          <p className="text-xl mb-8 opacity-80">
            Редактор кода для создания нативных приложений на Айос, Андройд и
            Веб.
          </p>
        </div>
        <Image
          src="/works/drugcode/ui.png"
          width={1600}
          height={1200}
          className="mb-8"
          alt="Drugcode ui"
        ></Image>
      </Section>
    </AnimateLayout>
  );
}
