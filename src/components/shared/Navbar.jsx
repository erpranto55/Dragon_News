import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/asset/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between my-3'>
            <div></div>
            <ul className='flex justify-between items-center space-x-3 text-gray-700'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/about-us'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/career'}>Career</NavLink>
                </li>
            </ul>

            <div className='flex items-center gap-4'>
                <Image src={userAvatar} alt='User Avatar' width={40} height={40} />
                <button className='btn text-white bg-purple-500 hover:bg-purple-700'>
                    <Link href={"/login"}>Login</Link >
                </button>
            </div>
        </div>
    );
};

export default Navbar;