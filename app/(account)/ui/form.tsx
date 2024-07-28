"use client"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
// import Button from "./button";
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

export function InputForm() {
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
	}

	return (
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
										I agree all statements in <a href="#" className="text-[#FC74B4] hover:underline">Termes of service</a>
									</FormLabel>
								</div>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<Button type="submit" className="bg-gradient-to-r from-[#274B74] to-[#8233C5] text-white rounded-full font-bold shadow">Sign Up</Button>
			</form>
		</Form>
	)
}