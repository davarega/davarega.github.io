import React from "react";
import { FaBars, FaSistrix } from "react-icons/fa6";
import Link from "next/link";

const NavTop = ({ toggle }: { toggle: () => void }) => {
	return (
		<div className="flex-col justify-between">
			{/* Navbar Atas */}
			<div className="w-full">
				<div className="container mx-auto px-4 h-20">
					<div className="flex justify-between items-center h-full">
						<div>
							<Link href="/">
								<h1 className="text-white font-poppins font-bold text-4xl">
									LOGO
								</h1>
							</Link>
						</div>
						{/* Tombol navbar android */}
						<button
							aria-label="navbar button"
							type="button"
							className="inline-flex items-center md:hidden"
							onClick={toggle}
						>
							<FaBars />
						</button>
						{/* Navbar atas kanan */}
						<ul className="hidden md:flex gap-x-6 text-white items-center">
							<li>
								<Link href="/">
									<FaSistrix className="text-2xl" />
								</Link>
							</li>
							<li>
								<Link href="/profil">
									<p>Profil</p>
								</Link>
							</li>
							<li>
								<Link href="/signin">
									<p>Masuk</p>
								</Link>
							</li>
							<li>
								<Link href="/signup">
									<p>Daftar</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavTop;
