import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const NewsCard = ({ news }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="">
                    {/* Author Info */}
                    <div className='bg-slate-200'>
                        <div className='flex justify-between items-center  p-4 '>
                            <div className='flex gap-2 items-center'>
                                <Image
                                    src={news.author?.img}
                                    alt={news.author?.name}
                                    height={40}
                                    width={40}
                                    className='rounded-full'
                                />
                                <div>
                                    <h2 className='font-semibold'>{news.author?.name}</h2>
                                    <p className='text-xs font-normal'>{news.author?.published_date}</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <CiBookmark className='text-xl' />
                                <CiShare2 className='text-xl' />
                            </div>
                        </div>
                    </div>

                    <h2 className="card-title text-2xl font-bold p-4">{news.title}</h2>

                </div>
                <div className='p-4'>
                    <figure>
                        <Image
                            src={news.image_url}
                            alt={news.title}
                            width={300}
                            height={300}
                            className='w-full'
                        />
                    </figure>

                    <div>
                        <p className='line-clamp-3'>{news.details} </p>
                    </div>

                    <div className='flex gap-2 items-center justify-between mt-5'>
                        <div className='flex gap-4 items-center'>
                            <p className='flex gap-1 items-center'>
                                <IoIosStar className='text-lg text-yellow-500' />
                                {news.rating.number}
                            </p>

                            <p className='flex gap-1 items-center'>
                                <FaEye className='text-lg' />
                                {news.total_view}
                            </p>
                        </div>

                        <Link href={`/news/${news._id}`}>
                            <button className='btn text-white bg-purple-500 mt-6 hover:bg-purple-700'>
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;