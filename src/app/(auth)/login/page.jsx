"use client";

import React from "react";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";


const LoginPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleLogInFunc = async (data) => {
        console.log(data)
    };
    // console.log(watch("email"));

    return (
        <div className="container mx-auto min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl min-h-[60vh]">

                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Login Your Account
                </h2>

                <hr className="text-slate-300 my-6" />

                <Form className="flex flex-col gap-5" onSubmit={handleSubmit(handleLogInFunc)}>

                    {/* Email Field */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email address</Label>

                        <Input
                            placeholder="Your Email"
                            className="mt-1"
                            {...register("email")}
                        />

                        <FieldError />
                    </TextField>

                    {/* Password Field */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {

                            if (value.length === 0) {
                                return "Password field is Required";
                            }
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>

                        <Input
                            placeholder="Enter your password"
                            className="mt-1"
                            {...register("password")}
                        />

                        {/* <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description> */}

                        <FieldError />
                    </TextField>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">

                        <Button
                            type="submit"
                            className="w-full bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300"
                        >
                            Login
                        </Button>


                    </div>
                </Form>
                <div className="flex gap-2 items-center justify-center mt-5">
                    <h2 className="text-sm text-slate-700">Don&apos;t Have An Account ? </h2>
                    <Link href="/register">
                        <h2 className="text-red-600 font-bold">
                            Register
                        </h2 >
                    </Link >
                </div>
            </div>
        </div >
    );
};

export default LoginPage;