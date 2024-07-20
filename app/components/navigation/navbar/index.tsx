import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaBars, FaSistrix, FaAngleDown  } from "react-icons/fa6";
import Link from "next/link";

const Navbar = ({ toggle }: { toggle: () => void }) => {
	const [scroll, setScroll] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 10) { // window.screen.height
			setScroll(true);
		} else {
			setScroll(false);
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	return (
		<div className="md:h-screen bg-gradient-to-r from-blue-base to-purple-base md:from-purple-mate md:via-blue-mate md:to-blue-dash flex flex-col justify-between">
			{/* <div className={`${scroll ? 'navbar-top active' : 'navbar-top'} w-full top-0 z-[9]`}> */}
			<div className="w-full z-9">
				<div className="container mx-auto px-4 h-20">
					<div className="flex justify-between items-center h-full">
						<div>
							<Link href="/">
								<p className="text-white font-bold text-4xl">Logo</p>
							</Link>
						</div>
						<button
							type="button"
							className="inline-flex items-center md:hidden"
							onClick={toggle}
						>
							<FaBars />
						</button>
						<ul className="hidden md:flex gap-x-6 text-white items-center">
							<li>
								<Link href="/">
									<FaSistrix className="text-2xl"/>
								</Link>
							</li>
							<li>
								<Link href="/signin">
									<p>masuk</p>
								</Link>
							</li>
							<li>
								<Link href="/signup">
									<p>daftar</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<h1 className="hidden md:flex justify-center h-full items-center flex text-2xl">WELCOME TO ASEP NEWS !</h1>
			</div>
			<div className="hidden md:flex w-full bottom-0">
				<div className="container h-20 mx-auto px-4">
					<ul className="hidden md:flex gap-x-6 text-white flex justify-between items-center h-full">
						<li>
							<Link href="/">
								<p>Home</p>
							</Link>
						</li>
						<li>
							<Link href="/">
								<p>Nasional</p>
							</Link>
						</li>
						<li>
							<Link href="/">
								<p>Internasional</p>
							</Link>
						</li>
						<li>
							<Link href="/">
								<p>Ekonomi</p>
							</Link>
						</li>
						<li>
							<Link href="/">
								<p>Olahraga</p>
							</Link>
						</li>
						<li>
							<Link href="/" className="flex items-center gap-1">
								<p>Lainnya</p>
								<FaAngleDown className="text-xl"/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* <div className="mx-auto bg-gradient-to-r from-purple-mate via-blue-mate to-blue-dash">
				
			</div> */}
		</div>
	);
};

export default Navbar;