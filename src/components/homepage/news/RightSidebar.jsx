"use client";

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RightSidebar = () => {

    const handleGoogleSignIn = async () => {

        try {

            await authClient.signIn.social({
                provider: "google",
            });

            toast.success("Google login successful!");

        } catch (error) {

            toast.error("Google login failed!");
        }
    };

    const handleGitHubSignIn = async () => {

        try {

            await authClient.signIn.social({
                provider: "github"
            });

            toast.success("GitHub login successful!");

        } catch (error) {

            toast.error("GitHub login failed!");
        }
    };



    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <h2 className='font-bold text-xl mb-4'>Login With</h2>
            <div className='flex flex-col gap-2 '>
                <button
                    className='btn text-blue-500 border border-blue-500 font-bold'
                    onClick={handleGoogleSignIn}>
                    <FaGoogle /> Login with Google
                </button>

                <button
                    className='btn'
                    onClick={handleGitHubSignIn}>
                    <FaGithub /> Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;