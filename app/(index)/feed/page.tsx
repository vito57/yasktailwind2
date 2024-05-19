import { AnimateLayout } from "../../components/server";

// Set the Access Token

import { FeedItem } from "@/app/components/server";
export const metadata = {
  title: "Design Feed",
  description: "Design feed",
};
async function getData() {
  const res = await fetch(
    `https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE}&per_page=100`
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
      <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
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
