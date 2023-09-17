import { AnimateLayout } from "../../components/client";

// Set the Access Token
const accessToken =
  "3606dd45845aa61e5b25cd844cbe0dec4e53fe3255009a6a24d97f875ccfaa30";
import { FeedItem } from "@/app/components/server";

async function getData() {
  const res = await fetch(
    "https://api.dribbble.com/v2/user/shots?access_token=3606dd45845aa61e5b25cd844cbe0dec4e53fe3255009a6a24d97f875ccfaa30&per_page=100"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Feed() {
  const data = await getData();

  return (
    <AnimateLayout>
      <div className="grid gap-x-8 gap-y-6 lg:grid-cols-2 md:grid-cols-2">
        {data.map((i: any) =>
          i.tags.includes("portfolio") ? (
            <FeedItem
              key={i.id}
              imageSrc={i.images.hidpi}
              imageAlt={i.title}
              href={i.html_url}
            />
          ) : (
            false
          )
        )}
      </div>
    </AnimateLayout>
  );
}
