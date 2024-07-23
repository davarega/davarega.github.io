"use client";
import { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import NavTop from "./navbar/navTop";
import Hero from "../hero";
import NavBottom from "./navbar/navBottom";

const Navigation = () => {
	// toggle sidebar
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
		{/* <div className="bg-gradient-to-r from-blue-base to-purple-base md:from-purple-mate md:via-blue-mate md:to-blue-dash"> */}
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<NavTop toggle={toggle} />
			<Hero />
			<NavBottom />
		{/* </div> */}
		</>
	);
};

export default Navigation;