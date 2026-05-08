import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);

    return {
        title: news.title,
        description: news.description,
    }
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);

    return (
        <div className='container mx-auto my-8 px-4 '>
            <div className='grid grid-cols-12 gap-6'>

                {/* Main Content */}
                <div className='col-span-9 border border-slate-200 p-4 rounded-md bg-white'>

                    <h2 className='text-xl font-bold  mb-4'>
                        Dragon News
                    </h2>

                    <Image
                        src={news.image_url}
                        width={900}
                        height={500}
                        alt={news.title}
                        className='w-full rounded-md mb-5'
                    />

                    <h1 className='text-2xl font-bold mb-4'>
                        {news.title}
                    </h1>

                    <p className='text-gray-600 leading-8'>
                        {news.details}
                    </p>

                    <Link href={`/category/${news.category_id}`}>
                        <button className='btn text-white bg-purple-500 mt-6 hover:bg-purple-700'>
                            <FaArrowLeft /> All news in this category
                        </button>
                    </Link>
                </div>

                {/* Right Sidebar */}
                <div className='col-span-3'>
                    <RightSidebar />
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsPage;