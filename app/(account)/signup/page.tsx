"use client";
import Link from "next/link";
import Card from "../ui/card";
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RegisterSchema } from "@/schema/authSchema"
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

const Signup = () => {
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            username: "",
            emailAddress: "",
            password: "",
            passwordConfirm: "",
            termes: false,
        },
    })

    function onSubmit(data: z.infer<typeof RegisterSchema>) {
        console.log(data);
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
        return
    }

    return (
        <Card text="Sign Up With :">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    {/* <FormLabel>Username</FormLabel> */}
                                    <FormControl>
                                        <Input {...field} placeholder="username" type="text" className="rounded-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="emailAddress"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    {/* <FormLabel>Email</FormLabel> */}
                                    <FormControl>
                                        <Input {...field} placeholder="email" type="email" className="rounded-full" />
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
                                        <Input {...field} placeholder="password" type="password" className="rounded-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="passwordConfirm"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    {/* <FormLabel>Confirm Password</FormLabel> */}
                                    <FormControl>
                                        <Input {...field} placeholder="confirm password" type="password" className="rounded-full" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="termes"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="flex gap-2">
                                        <FormControl>
                                            <Checkbox checked={field.value}
                                                onCheckedChange={field.onChange} />
                                        </FormControl>
                                        <FormLabel>
                                            I agree all statements in <Link href="#" className="text-[#FC74B4] hover:underline">Termes of service</Link>
                                        </FormLabel>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <Link href="/profile">
                        <Button type="submit" className="bg-gradient-to-r from-[#274B74] to-[#8233C5] text-white rounded-full font-bold shadow">Sign Up</Button>
                    </Link>
                </form>
            </Form>
            {/* <div className="mt-5 flex flex-col gap-3">
                <form action="">
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="border border-solid border-black w-full py-2 pl-3 rounded-full shadow placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer text-sm" />
                </form>
                <form action="">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="border border-solid border-black w-full py-2 pl-3 rounded-full shadow placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer text-sm" />
                </form>
                <form action="">
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="border border-solid border-black w-full py-2 pl-3 rounded-full shadow placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer text-sm" />
                </form>
                <form action="">
                    <input
                        type="password"
                        id="repeat_password"
                        placeholder="Repeat Password"
                        className="border border-solid border-black w-full py-2 pl-3 rounded-full shadow placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer text-sm" />
                </form>
            </div>
            <div className="mt-3 flex items-center justify-between">
                <form >
                    <label htmlFor="checkbox" className="block">
                        <input
                            type="checkbox"
                            id="checkbox"
                            className="large-checkbox align-middle" /> <span className="ml-2 align-middle text-sm">I agree all statements in <Link href="#" className="text-[#FC74B4] hover:underline">Termes of service</Link></span>
                    </label>
                </form>
            </div>
            <Button title="Sign Up" /> */}
        </Card>
    )
}
export default Signup