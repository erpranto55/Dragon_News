import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categories = await getCategories();
  // console.log("categories", categories.news_category);
  return (
    <div className=" container mx-auto grid grid-cols-4 gap-4">
      <div>
        <LeftSidebar categories={categories} activeId={"01"} />
      </div>
      <div className="font-bold text-3xl bg-green-100 col-span-2">All News</div>
      <div className=" ">
        <RightSidebar />
      </div>
    </div>
  );
}
