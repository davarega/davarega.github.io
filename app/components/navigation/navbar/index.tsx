import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaBars, FaSistrix, FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

const Navbar = ({ toggle }: { toggle: () => void }) => {
	const [scroll, setScroll] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 10) {
			// window.screen.height
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	type navItem = {
		label: string;
		link?: string;
		children?: navItem[];
	}

	const navItems: navItem[] = [
		{
			label: 'Home',
			link: '/'
		},
		{
			label: 'Nasional',
			link: '/'
		},
		{
			label: 'Internasional',
			link: '/'
		},
		{
			label: 'Ekonomi',
			link: '/'
		},
		{
			label: 'Olahraga',
			link: '/'
		},
		{
			label: 'Lainnya',
			children: [
				{
					label: 'Teknologi',
					link: '/'
				},
				{
					label: 'Kesehatan',
					link: '/'
				},
				{
					label: 'Pendidikan',
					link: '/'
				},
				{
					label: 'Hiburan',
					link: '/'
				},
				{
					label: 'Lifestyle',
					link: '/'
				},
			]
		}
	]

	return (
		<div className="md:h-screen bg-gradient-to-r from-blue-base to-purple-base md:from-purple-mate md:via-blue-mate md:to-blue-dash flex flex-col justify-between">
			{/* <div className={`${scroll ? 'navbar-top active' : 'navbar-top'} w-full top-0 z-[9]`}> */}
			<div className="w-full z-9">
				<div className="container mx-auto px-4 h-20">
					<div className="flex justify-between items-center h-full">
						<div>
							<Link href="/">
								<h1 className="text-white font-poppins font-bold text-4xl">
									LOGO
								</h1>
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
									<FaSistrix className="text-2xl" />
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
				<h1 className="hidden md:flex justify-center font-quintessential h-full items-center flex text-5xl">
					WELCOME TO ASEP NEWS !
				</h1>
			</div>
			<div className="hidden md:flex w-full bottom-0">
				<div className="container h-20 mx-auto px-4">
					<ul className="hidden md:flex gap-x-6 text-white flex justify-between items-center h-full">
						{navItems.map((item, index) => (
							<li className="group h-full">
								<Link key={index} href="/" className="h-full flex items-center">
									<p className="flex gap-2">
										<span>{item.label}</span>
										{item.children && <FaAngleDown className="text-xl group-hover:rotate-180 transition-all" />}
									</p>
									{/* {item.children && (
										<div className="absolute right-0 text-black hidden group-hover:flex w-auto flex-col gap-1 transition-all bg-white py-3">
											{item.children.map((child, index) => (
												<Link key={index} href={child.link ?? "#"}>
													<p>{child.label}</p>
												</Link>
											))}
										</div>
									)} */}
								</Link>
								{item.children && (
									<div className="absolute -mt-5 text-black transition duration-300 rounded-xl hidden group-hover:flex w-auto flex-col gap-4 transition-all bg-white py-3 px-4">
										{item.children.map((child, index) => (
											<Link key={index} href={child.link ?? "#"}>
												<p>{child.label}</p>
											</Link>
										))}
									</div>
								)}
							</li>
						))}
						{/* <li>
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
							<Link href="/" className="relative items-center group">
								<p className="flex gap-2">
									<span>Lainnya</span>
									<FaAngleDown className="text-xl group-hover:rotate-180 transition-all" />
								</p>
								<div className="absolute right-0 text-black hidden group-hover:flex w-auto flex-col gap-1 transition-all bg-white py-3">
									hello
								</div>
							</Link>
						</li> */}
					</ul>
				</div>
			</div>
			{/* <div className="mx-auto bg-gradient-to-r from-purple-mate via-blue-mate to-blue-dash">
				
			</div> */}
		</div>
	);
};

export default Navbar;
