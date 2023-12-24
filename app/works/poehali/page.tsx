import {
    Article,
    AnimateLayout,
    Text,
    ArticleFigure,
    Section,
    ArticleImageSection,
    ArticleHeader,
    BodyImage,
    Button,
  } from "../../components/server";
  import Image from "next/image";
  import Link from "next/link";
  export const metadata = {
    title: "Poehali - Adaptive web site",
    description: "Website for TV channel",
  };
  
  const Page = () => {
    return (
      <AnimateLayout>
        <Article className="relative">
          <ArticleHeader className="bg-[url('/works/poehali/bg.png')] bg-cover">
            <ArticleFigure>
              <BodyImage
                src="/works/poehali/cover.png"
                width={1120}
                height={416}
                className="bg-transparent"
                alt="Poehali TV"
              />
            </ArticleFigure>
          </ArticleHeader>
          <Section id="about" className="mb-8 px-4 relative container">
            <Text title="About">
            <p>Adaptive web site for TV channel</p>
            </Text>
          </Section>
  
          {/* UI */}
  
          <Section id="ui" className="mb-2 px-4 container">

<ArticleFigure>
              <BodyImage
                src="/works/poehali/main.png"
              
                alt="Poehali main"
              />
            </ArticleFigure>
            <ArticleFigure>
              <BodyImage
                src="/works/poehali/2.png"
              
                alt="Poehali main"
              />
            </ArticleFigure>
            <ArticleFigure>
              <BodyImage
                src="/works/poehali/adaptive1.png"
              
                alt="Poehali main"
              />
            </ArticleFigure>
            <ArticleFigure>
              <BodyImage
                src="/works/poehali/adaptive2.png"
              
                alt="Poehali main"
              />
            </ArticleFigure>
            <ArticleFigure>
              <BodyImage
                src="/works/poehali/styles.png"
              
                alt="Poehali main"
              />
            </ArticleFigure>
          </Section>
  

          <Section id="summary" className="container">
            <Text title="Summary">
              <p>
                Designer:{" "}
                <Link className="ylink" href="/vitaly">
                  Vitaly
                </Link>{" "}
              </p>
  <p>
    Live:{" "}
    <Link className="ylink" href="https://www.poehali.tv/">
   poehali.tv
    </Link>
  </p>
              <p>Year: 2019 </p>
            </Text>

          </Section>
        </Article>
      </AnimateLayout>
    );
  };
  
  export default Page;
  