import React from "react";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="text-white font-poppins">
			<div className="bg-purple-base">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 items-center justify-items-center">
						<div>
							<h1 className="text-7xl md:text-9xl font-bold">LOGO</h1>
							<div className="my-8 gap-2 flex flex-col">
								<p className="font-bold text-lg">informasi:</p>
								<Link href="#" className="w-fit">
									<p className="flex gap-3 items-center">
										<FaEnvelope className="text-xl"/>
										<span>Remaspentil@gmail.com</span>
									</p>
								</Link>
								<Link href="#" className="flex w-fit items-center">
									<p className="flex gap-3 items-center">
										<FaPhone className="text-xl"/>
										<span>911</span>
									</p>
								</Link>
							</div>
						</div>
						<div>
							<h1 className="text-2xl font-bold">KANAL</h1>
							<ul className="my-5 grid grid-cols-2 gap-y-2 gap-x-14">
								<li>Politik</li>
								<li>Internasional</li>
								<li>Ekonomi</li>
								<li>Daerah</li>
								<li>Edukasi</li>
								<li>Olahraga</li>
								<li>Sains</li>
								<li>Otomotif</li>
								<li>Teknologi</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black">
				<div className="container mx-auto px-4 py-4">
					<p className="text-center">© 2021 ASEP NEWS. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}