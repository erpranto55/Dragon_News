"use client";

import { authClient } from '@/lib/auth-client';
import React, { useEffect } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RightSidebar = () => {

    const { data: session } = authClient.useSession();

    // SUCCESS TOAST AFTER LOGIN
    useEffect(() => {

        if (session?.user) {
            toast.success("Login successful!");
        }

    }, [session]);

    const handleGoogleSignIn = async () => {

        try {

            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });

        } catch (error) {

            toast.error("Google login failed!");
        }
    };

    const handleGitHubSignIn = async () => {

        try {

            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
            });

        } catch (error) {

            toast.error("GitHub login failed!");
        }
    };

    return (
        <div>
            <h2 className='font-bold text-xl mb-4'>
                Login With
            </h2>

            <div className='flex flex-col gap-2 '>

                <button
                    className='btn text-blue-500 border border-blue-500 font-bold'
                    onClick={handleGoogleSignIn}
                >
                    <FaGoogle /> Login with Google
                </button>

                <button
                    className='btn'
                    onClick={handleGitHubSignIn}
                >
                    <FaGithub /> Login with Github
                </button>

            </div>
        </div>
    );
};

export default RightSidebar;