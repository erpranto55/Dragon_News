"use client";

import React from "react";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

// ADD THESE
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegisterFunc = async (data) => {

        const { name, email, password, photoURL } = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: photoURL,
            callbackURL: "/",
        });

        // ERROR TOAST
        if (error) {

            // if user already exists
            if (
                error.message?.toLowerCase().includes("user already exists") ||
                error.message?.toLowerCase().includes("already exists")
            ) {
                toast.error("User already exists!");
            } else {
                toast.error(error.message || "Registration failed");
            }

            return;
        }

        // SUCCESS TOAST
        if (res) {
            toast.success("Registration successful!");
        }
    };

    return (
        <div className="container mx-auto min-h-screen flex items-center justify-center px-4">

            {/* TOAST CONTAINER */}
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl min-h-[60vh]">

                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Register Your Account
                </h2>

                <hr className="text-slate-300 my-6" />

                <Form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit(handleRegisterFunc)}
                >

                    <TextField isRequired>
                        <Label>Name</Label>

                        <Input
                            placeholder="Your Name"
                            className="mt-1"
                            {...register("name")}
                        />

                        <FieldError />
                    </TextField>

                    <TextField isRequired>
                        <Label>Photo URL</Label>

                        <Input
                            placeholder="Photo URL"
                            className="mt-1"
                            {...register("photoURL")}
                        />

                        <FieldError />
                    </TextField>

                    <TextField isRequired type="email">
                        <Label>Email address</Label>

                        <Input
                            placeholder="Your Email"
                            className="mt-1"
                            {...register("email")}
                        />

                        <FieldError />
                    </TextField>

                    <TextField isRequired type="password">
                        <Label>Password</Label>

                        <Input
                            placeholder="Enter your password"
                            className="mt-1"
                            {...register("password")}
                        />

                        <FieldError />
                    </TextField>

                    <div className="flex gap-3 pt-2">
                        <Button
                            type="submit"
                            className="w-full bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300"
                        >
                            Register
                        </Button>
                    </div>
                </Form>

                <div className="flex gap-2 items-center justify-center mt-5">
                    <h2 className="text-sm text-slate-700">
                        Already Have An Account ?
                    </h2>

                    <Link href="/login">
                        <h2 className="text-purple-500 font-bold">
                            Login
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;