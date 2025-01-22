import Link from "next/link";
import { SpanButton, Badge, Button } from "../components/server";
export default function Page() {
  return (
    <div className="container my-10">
      <h1 className="h1 mb-8">
        Header 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
        aliquam asperiores.{" "}
        <Link className="ylink" href="/">
          {" "}
          Iste numquam{" "}
        </Link>{" "}
        perspiciatis accusantium ducimus ipsa similique vitae corporis possimus
        ut minus. Magnam delectus quia consequuntur accusantium. Quibusdam,
        earum! <Badge>Some Badge Text</Badge>
      </h1>
      <p className="text-xl mb-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        expedita ducimus ipsum aspernatur est, vero reprehenderit fuga, beatae
        ipsa sequi,{" "}
        <Link className="ylink" href="/">
          {" "}
          Iste numquam{" "}
        </Link>{" "}
        nemo ut cumque. Accusantium quidem distinctio autem aut, magnam commodi?
        <Badge>Some Badge Text</Badge>
      </p>
      <p className="text-base mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vel rem
        voluptatibus{" "}
        <Link className="ylink" href="/">
          {" "}
          Iste numquam{" "}
        </Link>{" "}
        accusantium soluta nulla repellendus aut voluptas eaque suscipit
        adipisci omnis repellat, sed, culpa <Badge>Some Badge Text</Badge> unde
        repudiandae porro cupiditate eius!
      </p>
      <p className="text-sm mb-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        assumenda{" "}
        <Link className="ylink" href="/">
          {" "}
          Iste numquam{" "}
        </Link>{" "}
        harum, architecto nulla perferendis optio et temporibus incidunt
        praesentium, itaque ducimus officiis corrupti non reprehenderit
        obcaecati dolores, dicta laborum. Aperiam?
      </p>
      <p className="text-xs mb-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis
        nulla{" "}
        <Link className="ylink" href="/">
          {" "}
          Iste numquam{" "}
        </Link>{" "}
        perferendis. Autem quasi at fugiat quos iste nam reprehenderit quam modi
        voluptas facere, id tenetur, quia praesentium ipsum esse.
      </p>
      <h2 className="h2 mb-8">
        Header 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        laudantium veniam natus quis accusantium ipsum aperiam voluptates
        mollitia ex vel ratione, a alias ipsa quam asperiores deleniti illo?
        Voluptate, maxime?
      </h2>
      <h3 className="h3 mb-8">
        Header 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        iure perferendis obcaecati enim veniam tempora quidem, iste sequi
        placeat nostrum vel eum debitis dolorum velit ea aliquid. Enim,
        laboriosam modi?
      </h3>
      <h4 className="h4 mb-8">
        Header 4 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Nesciunt quo ab, eius excepturi cupiditate atque minus dolores error
        earum aliquam ea et alias natus unde cumque voluptates asperiores sint
        aperiam.
      </h4>
      <h5 className="h5 mb-8">
        Header 5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci tempora error possimus repellat labore quos hic rerum, deleniti
        placeat aut soluta veritatis sapiente, nobis doloribus est harum id
        neque qui! <Badge>Some Badge Text</Badge>
      </h5>
      <h6 className="h6 mb-8">
        Header 6 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Repellat iure, voluptates, molestiae sapiente accusantium laborum
        consequatur nesciunt suscipit est eveniet exercitationem recusandae
        explicabo fugit fuga nisi, dolores delectus beatae ut.
      </h6>
      <div>
        <h5 className="h5 mb-8">Button</h5>
        <Button path="/">Some button</Button>
        <Button path="/" className="bg-yred text-ybg">
          Some button
        </Button>
        <Button path="/" className="bg-ydarkbrown text-ylime">
          Some button1
        </Button>
        <Button path="/" className="bg-ygrey">
          Some button222 <Badge>New</Badge>
        </Button>
        <SpanButton>BadgeButton</SpanButton>
      </div>
    </div>
  );
}
