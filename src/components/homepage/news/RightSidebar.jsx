"use client";

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        // console.log("data", data);
    }

    const handleGotHubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
        // console.log("data", data);
    }



    return (
        <div>
            <h2 className='font-bold text-xl mb-4'>Login With</h2>
            <div className='flex flex-col gap-2 '>
                <button
                    className='btn text-blue-500 border border-blue-500 font-bold'
                    onClick={handleGoogleSignIn}>
                    <FaGoogle /> Login with Google
                </button>

                <button
                    className='btn'
                    onClick={handleGotHubSignIn}>
                    <FaGithub /> Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;