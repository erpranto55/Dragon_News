import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({ params }) => {

    const { id } = await params;
    console.log(id, "paramsRes")

    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);

    return (
        <div className=" container mx-auto grid grid-cols-5 gap-4">
            <div>
                <LeftSidebar categories={categories} activeId={id} />
            </div>
            <div className="font-bold  col-span-3">
                <h2 className='text-xl mb-6'>News By Category</h2>
                <div className="space-y-4 ">
                    {news.length > 0 ? news.map((n) => {
                        return <div key={n._id} className="p-6 rounded-md border">{n.title}</div>;
                    }) : <h2 className='text-5xl font-bold text-center my-7'>No News Found.</h2>}
                </div>
            </div>
            <div className=" ">
                <RightSidebar />
            </div>
        </div>

    );
};

export default NewsCategoryPage;