import { Metadata } from "next";
import {
  
  AnimateLayout,
 
  Text,
  ArticleImageSection,
  ArticleFigure,
  BodyImage,
  ArticleHeader,
  Summary,
} from "../../components/server";
import LayoutAnimated from "@/components/global/layoutanimated";
import Article from "@/components/global/article";
import WorksHeader from "@/components/blocks/worksheader";
import WorksFigure from "@/components/blocks/worksfigure";
import WorksImage from "@/components/blocks/worksimage";
import Section from "@/components/global/section";
import TextBlock from "@/components/global/textblock";
import WorksImageStack from "@/components/blocks/worksimagestack";
import WorksSummary from "@/components/blocks/workssummary";
export const metadata:Metadata = {
  title: "Flamingo",
  description: "Story about Drugcode design",
};
export default function Flamingo() {
  return (
    <LayoutAnimated>
      <Article className="relative">
        <WorksHeader className="bg-secondary">
          <WorksFigure>
            <WorksImage
              src="/works/flamingo/cover.png"
              width={1120}
              height={416}
              className="bg-transparent  w-full"
              alt="Flamingo cover"
            />
          </WorksFigure>
        </WorksHeader>

        <Section id="About">
          <TextBlock title="About">
            <p>
              I worked with our team and developers to craft a style guide for
              superapp, which contains the library of common components used in
              the product and expands out to design principles for the design
              team to follow, as well as UX guidance on usage and implementation
              for every piece used in the product, from form elements to
              typography and entire screen configurations.
            </p>
          </TextBlock>
        </Section>
        <br />
        <Section id="preview" className="bg-secondary" fluid>
         
            <WorksFigure>
              <WorksImage src="/works/flamingo/overview.png" alt="Flamingo" />
            </WorksFigure>
          
        </Section>
<br />
        <Section id="style">
          <TextBlock>
            <p>
              The style guide was vital for both our developers and our
              designers, giving us a shared kit of parts to work from and
              ensures consistency within our designs. This framework was adopted
              by additional suites and it used across multiple teams at the
              company today.
            </p>
          </TextBlock>
          <br />

          <TextBlock title="Process">
            <ol className="list-decimal list-inside">
              <li>Defining a goals and finding a problems</li>
              <li>
                Defining a principles (on principles based review process)
              </li>
              <li>
                Deep research of web and mobile specification(IOS Android Web)
              </li>
              <li>Research and define methodology(BEM, Atomic design, etc.)</li>
              <li>Make list of components</li>
              <li>Define extended color plate (for UI and content)</li>
              <li>Define theming tokens</li>
              <li>Make guidelines and components</li>
              <li>Make process of scaling, contributing and review</li>
            </ol>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/flamingo/principles.png"
              width={1120}
              height={600}
              alt="Flamingo"
            />
          </WorksFigure>
          <br />
          <TextBlock>
            Principles are the most important part of any system. They determine
            the shape of the future product, and the product review process will
            be built on them in the future. Sbergdrug is an internal product and
            has no competitors, so we chose speed, predictability, uniformity
            and simplicity as the main principles. As a designer, you should
            view a good solution as being as simple, predictable, fast to
            produce, and consistent in style as possible.
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/flamingo/list_and_flow.png"
              width={1120}
              height={500}
             
              alt="Flamingo"
            />
          </WorksFigure>
          <br />
          <TextBlock title="Guides">
            <p>
              The Style Guide also served as a home for product design
              principles and general advice about typography, accessibility, and
              UX best practices. The design team was composed of designers who
              ranged from folks who had worked at Sber for decades, to young
              designers working on their first product team. The Style Guide was
              a way to help reach consensus on common paradigms and industry
              standards.
            </p>
          </TextBlock>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/flamingo/styles.png"
             
              alt="Flamingo"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/flamingo/guides.png"
              width={1120}
              height={600}
              
              alt="Flamingo"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              src="/works/flamingo/components.png"
             
              alt="Flamingo"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
             
              src="/works/flamingo/components2.png"
              alt="Flamingo"
            />
          </WorksFigure>
          <br />
          <WorksFigure>
            <WorksImage
              
              src="/works/flamingo/components3.png"
              alt="Flamingo"
            />
          </WorksFigure>
          <br />
          <TextBlock title="Examples">
            <p>
              In addition to documenting components and their usage, I crafted
              do/do not scenarios, and tons of test examples for many elements
              in the style guide, to help illustrate best practice and prevent
              easily avoided pratfalls. The Style Guide was both documentation
              and education.
            </p>
          </TextBlock>
          <br />
          <WorksImageStack
           
            images={[{
              src: "/works/flamingo/u1.png",
              //caption: "Representing function as node",
            },{
              src: "/works/flamingo/u2.png",
              //caption: "Wireframes",
            }]}
          />
          <br />
          <WorksImageStack
           
            images={[{
              src: "/works/flamingo/u3.png",
              //caption: "Representing function as node",
            },{
              src: "/works/flamingo/u4.png",
              //caption: "Wireframes",
            }]}
          />
          <br />
          <WorksImageStack
           
            images={[{
              src: "/works/flamingo/u5.png",
              //caption: "Representing function as node",
            },{
              src: "/works/flamingo/u6.png",
              // caption: "Wireframes",
            }]}
          />
          <br />
                    <Text title="Summary">
            <WorksSummary designer="vitaly" year="2021" client="Sber" />
          </Text>
        </Section>

      </Article>
    </LayoutAnimated>
  );
}
