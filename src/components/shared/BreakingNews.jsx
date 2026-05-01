import React from 'react';
import Marquee from 'react-fast-marquee';

const highlights = [
    {
        id: 1,
        title: "Germany vs Spain — Match Highlights",
        description: "A thrilling clash as Germany and Spain battled with intense pace, possession, and stunning goals throughout the match.",
    },
    {
        id: 2,
        title: "Late Goal Seals Dramatic Victory",
        description: "A last-minute counterattack secured the win in a high-pressure finish that kept fans on the edge of their seats.",
    },
    {
        id: 3,
        title: "Top Performers Shine Bright",
        description: "Key players delivered outstanding performances, with crucial saves, assists, and tactical brilliance defining the game.",
    },
];

const BreakingNews = () => {
    return (
        <div className=' container mx-auto flex justify-between gap-4 items-center bg-gray-200 py-4 px-2'>
            <button className='btn bg-red-400 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    highlights.map(n=>(
                        <span key={n.id}>{n.title}</span>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;