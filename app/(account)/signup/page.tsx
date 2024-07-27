import Link from "next/link";
import { FaGoogle, FaFacebookF } from "react-icons/fa6";
import Button from "../ui/button";
import Card from "../ui/card";
import { InputForm } from "../ui/form";

const Signup = () => {
    return (
        <Card text="Sign Up With :">
            <div>
                <InputForm />
            </div>
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