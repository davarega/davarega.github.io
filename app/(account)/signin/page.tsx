"use client";
import Card from "../ui/card";
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { LoginSchema } from "@/schema/authSchema"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

import Link from "next/link";
// import Button from "../ui/button";

const Login = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            emailAddress: "",
            password: "",
            rememberMe: false,
        },
    })

    function onSubmit(data: z.infer<typeof LoginSchema>) {
        console.log(data);
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Card text="Sign In With :">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="emailAddress"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    {/* <FormLabel>Email</FormLabel> */}
                                    <FormControl>
                                        <Input {...field} placeholder="Email" type="email" className="rounded-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    {/* <FormLabel>Password</FormLabel> */}
                                    <FormControl>
                                        <Input {...field} placeholder="Password" type="password" className="rounded-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <div className="flex justify-between items-center">
                        <FormField
                            control={form.control}
                            name="rememberMe"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <div className="flex gap-2 items-center">
                                            <FormControl>
                                                <Checkbox checked={field.value}
                                                    onCheckedChange={field.onChange} />
                                            </FormControl>
                                            <FormLabel>Remember Me</FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <Link href="#" className="text-sm bg-gradient-to-r from-blue-base to-purple-base bg-clip-text text-transparent">Forgot Password?</Link>
                    </div>
                    <Button type="submit" className="bg-gradient-to-r from-blue-base to-purple-base text-white rounded-full font-bold shadow">Sign In</Button>
                </form>
            </Form>
            <div className="flex mt-5 gap-1">
                <p className="text-sm">{"Don't have an account?"}</p>
                <Link href="/signup" className="text-sm text-[#4F8FDA]">Register</Link>
            </div>
        </Card>
        // <div className=" w-[320px] md:w-[384px]  bg-white px-5 py-3 shadow-md rounded-xl m-2 border border-solid border-sky-600 mx-6">
        //     <div className="flex items-center">
        //         <div className="text-lg md:text-xl">
        //             Sign In With
        //         </div>
        //         <div className="flex justify-center">
        //             <ul className="flex items-center space-x-12 pl-12 ">
        //                 <li>
        //                     <Link href="#" className="">
        //                         <button className="bg-gradient-to-b from-[#274B74] to-[#8233C5] text-white w-9 h-9 rounded-full text-2xl font-bold shadow-md">G</button>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link href="#" className="">
        //                         <button className="bg-gradient-to-b from-[#274B74] to-[#8233C5] text-white w-9 h-9 rounded-full text-2xl font-bold shadow-md">f</button>
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div className="text-center mt-5">
        //         <div className="flex items-center justify-center">
        //             <div className="flex-grow border-t-[2px] border-black"></div>
        //             <span className="mx-2 font-semibold">Or</span>
        //             <div className="flex-grow border-t-[2px] border-black"></div>
        //         </div>
        //     </div>
        //     <div className="mt-5">
        //         <form action="">
        //             <input
        //                 type="email"
        //                 id="email"
        //                 placeholder="Email"
        //                 className="border border-solid border-black w-full py-2 pl-3 rounded-full shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer text-sm" />
        //         </form>
        //     </div>
        //     <div className="mt-5">
        //         <form action="">
        //             <input
        //                 type="password"
        //                 id="password"
        //                 placeholder="Password"
        //                 className="border border-solid border-black w-full py-2 pl-3 rounded-full shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer text-sm" />
        //         </form>
        //     </div>

        //     <div className="mt-5 flex items-center justify-between">
        //         <form >
        //             <label htmlFor="checkbox" className="block">
        //                 <input
        //                     type="checkbox"
        //                     id="checkbox"
        //                     className="large-checkbox align-middle" /> <span className="ml-2 align-middle text-sm">Remember Me</span>
        //             </label>
        //         </form>
        //         <div >
        //             <p><Link href="" className="text-sm bg-gradient-to-r from-[#274B74] to-[#8233C5] bg-clip-text text-transparent">Forgot Password?</Link></p>
        //         </div>
        //     </div>
        //     <Button title="Sign In" />
        //     <div className="flex mt-5 gap-1">
        //         <p className="text-sm">{"Don't have an account?"}</p>
        //         <Link href="#" className="text-sm text-[#4F8FDA]">Register</Link>
        //     </div>
        // </div>
    )
}
export default Login;