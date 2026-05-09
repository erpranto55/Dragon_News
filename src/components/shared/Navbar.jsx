"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/asset/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const shortName = user?.name
        ?.split(" ")
        .slice(0, 2)
        .join(" ");

    return (
        <div className='container mx-auto grid grid-cols-3 items-center my-3'>

            {/* Left Side */}
            <div></div>

            {/* Center Nav */}
            <ul className='flex justify-center items-center gap-5 text-gray-700'>
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

            {/* Right Side */}
            <div className='flex justify-end items-center gap-4'>

                {isPending ? (
                    <span className="loading loading-ring loading-lg"></span>
                ) : user ? (
                    <div className='flex items-center gap-2'>

                        <h3 className='hidden md:block'>
                            Hello, {shortName}
                        </h3>

                        <Image
                            src={user?.image || userAvatar}
                            alt='User Avatar'
                            width={40}
                            height={40}
                            className='rounded-full'
                        />

                        <button
                            onClick={async () => await authClient.signOut()}
                            className='btn text-white bg-red-500 hover:bg-red-700'
                        >
                            Logout
                        </button>

                    </div>
                ) : (
                    <button className='btn text-white bg-purple-500 hover:bg-purple-700'>
                        <Link href={"/login"}>
                            Login
                        </Link>
                    </button>
                )}

            </div>

        </div>
    );
};

export default Navbar;