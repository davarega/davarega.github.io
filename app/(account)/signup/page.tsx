import Link from "next/link"
const Signup = () =>{
    return(
        <main className="h-full">
            <div className="sm:flex items-center justify-center h-full">
                <div className="m-2  mt-5  md:mx-auto md:my-0 lg:mx-16 ">
                    <img src="/images/gmbr_login_signup.png" alt="gambar" className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] object-cover mx-6" />
                </div>

                <div className="flex-shrink-0 mx-2.5 md:mx-auto lg:mx-16">
                    <div className=" w-[320px] md:w-[384px]  bg-white px-5 py-4 shadow-md rounded-xl m-2 border border-solid border-sky-600 mx-6">
                        <div className="flex items-center">
                            <div className="text-lg md:text-xl">
                                Sign Up with 
                            </div>
                            <div className="flex justify-center">
                                <ul className="flex items-center space-x-12 pl-12 ">
                                    <li>
                                        <Link href="#" className="">
                                            <button className="bg-gradient-to-b from-[#274B74] to-[#8233C5] text-white w-9 h-9 rounded-full text-2xl font-bold shadow-md">G</button>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:bg-white">
                                            <button className="bg-gradient-to-b from-[#274B74] to-[#8233C5] text-white w-9 h-9 rounded-full text-2xl font-bold shadow-md">f</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <div className="flex items-center justify-center">
                                <div className="flex-grow border-t-[2px] border-black"></div>
                                <span className="mx-2 font-semibold">Or</span>
                                <div className="flex-grow border-t-[2px] border-black"></div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <form action="">                            
                                <input 
                                type="text"
                                id="text"
                                placeholder="Name"
                                className="border border-solid border-black w-full py-2 pl-3 rounded-full shadow placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer text-sm" />
                            </form>
                        </div>
                        <div className="mt-3">
                            <form action="">                            
                                <input 
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="border border-solid border-black w-full py-2 pl-3 rounded-full shadow placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer text-sm" />
                            </form>
                        </div>
                        <div className="mt-3">
                            <form action="">                                
                                <input 
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="border border-solid border-black w-full py-2 pl-3 rounded-full shadow placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer text-sm" />
                            </form>
                        </div>
                        <div className="mt-3">
                            <form action="">                                
                                <input 
                                type="password"
                                id="repeat password"
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
                                    className="large-checkbox align-middle" /> <span className="ml-2 align-middle text-sm">I agree all statements in <span className="text-[#FC74B4]">Termes of service</span></span>
                                </label>
                            </form>
                            <div >
                                <p><Link href="" className="text-sm"></Link></p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="py-1 pl-3 w-full shadow text-center bg-gradient-to-r from-[#274B74] to-[#8233C5] text-white rounded-full font-bold">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Signup