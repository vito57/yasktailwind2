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
    title: "Darlen App - shoping mobile app",
    description: "Shoping mobile app",
  };
  
  const Page = () => {
    return (
      <AnimateLayout>
        <Article className="relative">
          <ArticleHeader>
            <ArticleFigure>
              <BodyImage
                src="/works/darlen/cover.png"
                width={1120}
                height={416}
                
                alt="Poehali TV"
              />
            </ArticleFigure>
          </ArticleHeader>
          <Section id="about" className="mb-8 px-4 relative container">
            <Text title="About">
            <p>Darlen-Fashion Platform for the presentation of unique brands. Change the product in the case in the application section!</p>
            </Text>
          </Section>
  
          {/* UI */}
  
          <Section id="ui" className="mb-2 px-4 container">

<ArticleFigure>
              <BodyImage
                src="/works/darlen/1.png"
              
                alt="Darlen"
              />
            </ArticleFigure>
            <ArticleFigure>
              <BodyImage
                src="/works/darlen/2.png"
              
                alt="Darlen"
              />
            </ArticleFigure>
            <ArticleFigure>
              <BodyImage
                src="/works/darlen/3.png"
              
                alt="Darlen"
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
    <Link className="ylink" href="https://apps.apple.com/ru/app/darlen/id1524331706">
   Download App Store
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
  