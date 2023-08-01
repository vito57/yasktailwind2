import { AnimateLayout, Accordeon } from "../../components/client";
import { Article, ArticleSubMenu } from "../../components/server";
import {
  Section,
  ArticleImageSection,
  ArticleDescription,
} from "../../components/server";
import Image from "next/image";
export const metadata = {
  title: "Drugcode+ design",
  description: "Story about Drugcode design",
};
export default function Drugcode() {
  return (
    <AnimateLayout>
      <Article className="bg-neutral-900 relative text-ylightblue">
        <header
          id="intro"
          className="mb-8 pt-[128px] reletive mt-[-128px] bg-[#2367E8]"
        >
          <div className="container">
            <Image
              src="/works/drugcode/cover.png"
              width={1120}
              height={416}
              className="w-full mb-8 rounded"
              alt="Drugcode"
            />
          </div>
        </header>

        <Section id="about" className="mb-8 relative container">
          <ArticleDescription>
           <h2 className="text-2xl font-bold dark mb-4">About</h2>
            <p className="text-2xl mb-4 text-white">
              Web based Code and visual editor, for building native, IOS,
              Android and web applications.
            </p>
            <p className="text-xl mb-4">
              Задача — сформульровать предложения по улучшению уже существующего
              проекта.
            </p>
          </ArticleDescription>

          {/* UX DESIGN */}
          <Section id="ux design" className="mb-8 container">
            <ArticleDescription>
              <h2 className="text-2xl text-white  mb-4">2. UX design</h2>
              <p className="text-xl mb-5">
                Проект для внутреннего пользователя, для сознания
                микроприложений приложений внутри экосистемы Сбер. Пользователь
                младший разработчик, средний разраб.
              </p>
              <h3 className="text-xl text-white  mb-4"> Дизайн процесс</h3>
              <ol className="list-decimal list-inside text-xl mb-5">
                <li>Basic Research</li>
                <li>Define</li>
                <li>Ideate</li>
              </ol>
              <h3 className="text-xl text-white  mb-4">Основные проблемы</h3>
              <dl className="text-xl mb-4">
                <dt className="italic">Масштабирование</dt>
                <dd className="mb-4">
                  При добавленни функционала добавить его просто не получается
                  структура расширяется
                </dd>
                <dt className="italic">Консистентность</dt>
                <dd className="mb-4">
                  Над проектом работает много разработчиков. Между ними нет
                  коммуникации. Поэтому разные узлы выглядет и работают по
                  разному.
                </dd>
                <dt className="italic">Документация и процессы</dt>
                <dd className="mb-4">
                  Над проектом работает много разработчиков. Между ними нет
                  коммуникации. Поэтому разные узлы выглядет и работают по
                  разному.
                </dd>
              </dl>
            </ArticleDescription>
            <ArticleImageSection
              data1={{
                src: "/works/drugcode/structure.png",
              }}
              data2={{
                src: "/works/drugcode/layout.png",
              }}
            />
            <ArticleDescription>
              <h3 className="text-xl text-white  mb-4">Итоги</h3>
              <p className="text-xl mb-5">Пользователь определен.</p>
            </ArticleDescription>
          </Section>
          {/* BRANDING */}
        </Section>
        <Section id="branding" className="mb-8 container">
          <ArticleDescription>
            <h2 className="text-2xl text-white  mb-4"> 1. Branding</h2>
          </ArticleDescription>
          <ArticleImageSection
            data1={{ src: "/works/drugcode/brand.png" }}
            data2={{
              src: "/works/drugcode/brand-guide.png",
            }}
          />
          <ArticleDescription>
            <p className="text-xl mb-4">
              Для более быстрой и консистентной работы никак без фирменного
              стиля и логотипа.
            </p>
          </ArticleDescription>
        </Section>
        {/* UI DESIGN */}
        <Section className="mb-8 container">
          <ArticleDescription>
            <h2 className="text-2xl text-white mb-4 ">UI design</h2>
            <p className="text-xl mb-4 ">
              Редактор кода для создания нативных приложений на Айос, Андройд и
              Веб.
            </p>
          </ArticleDescription>
          <Image
            src="/works/drugcode/ui.png"
            width={1600}
            height={1200}
            className="mb-2 rounded"
            alt="Drugcode ui"
          ></Image>
          <ArticleImageSection
            data1={{ src: "/works/drugcode/style.png", caption: "Style guide" }}
            data2={{
              src: "/works/drugcode/wireframe.png",
              caption: "Wireframe structure",
            }}
          />
        </Section>
        {/* NODE */}
        <Section id="nodeeditor" className="mb-8 container">
          <ArticleDescription>
            <h2 className="text-2xl text-white font-bold mb-4">Node editor</h2>
            <p className="text-xl mb-4">
              Редактор кода для создания нативных приложений на Айос, Андройд и
              Веб.
            </p>
          </ArticleDescription>
          <figure className="mb-4">
            <Image
              src="/works/drugcode/node-editor.png"
              width={1600}
              height={1200}
              className="rounded"
              alt="Drugcode ui"
            />
            <figcaption className="text-sm">Dark theme</figcaption>
          </figure>
          <figure className="mb-4">
            <Image
              src="/works/drugcode/node-editor-light.png"
              width={1600}
              height={1200}
              className=" rounded"
              alt="Drugcode ui"
            />
            <figcaption className="text-sm">Light theme</figcaption>
          </figure>

          <ArticleDescription>
            <p className="text-xl mb-4 ">
              Редактор кода для создания нативных приложений на Айос, Андройд и
              Веб.
            </p>
          </ArticleDescription>
        </Section>

        <Section id="Process" className="mb-8 container">
          <ArticleDescription>
            <h2 className="text-2xl font-bold mb-5">Design process</h2>
            <p className="text-xl mb-4">
              This is the design process I followed for this project.
            </p>
            <ol className="text-xl list-inside list-decimal">
              <li>Research</li>
              <li>Define</li>
              <li>Prototype</li>
            </ol>
          </ArticleDescription>
        </Section>
      </Article>
    </AnimateLayout>
  );
}
