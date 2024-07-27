import Link from "next/link";
import { FaGoogle, FaFacebookF } from "react-icons/fa6";
import Button from "../ui/button";

const Card = ({ children, text = "", }) => {
	return (
		<div className=" w-[320px] md:w-[384px]  bg-white px-5 py-4 shadow-md rounded-xl m-2 border border-solid border-sky-600 mx-6">
			<div className="flex gap-5 items-center">
				<div className="text-lg md:text-xl">
					{text}
				</div>
				<div className="flex gap-2 text-white">
					<Link href="#">
						<FaGoogle size={34} href="#" className="p-2 bg-gradient-to-b from-blue-base to-purple-base rounded-full" />
					</Link>
					<Link href="#">
						<FaFacebookF size={34} href="#" className="p-2 bg-gradient-to-b from-blue-base to-purple-base rounded-full" />
					</Link>
				</div>
			</div>
			<div>
				<div className="text-center mt-5">
					<div className="flex items-center justify-center">
						<div className="flex-grow border-t-[2px] border-black"></div>
						<span className="mx-2 font-semibold">Or</span>
						<div className="flex-grow border-t-[2px] border-black"></div>
					</div>
				</div>
			</div>
			{children}
		</div>
	)
}
export default Card