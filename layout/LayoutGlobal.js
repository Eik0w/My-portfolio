import Menu from "../components/Menu";
import Header from "../components/Header";
import variables from "../theme/variables";
import {useEffect, useState} from "react";


export default function LayoutGlobal ({children}) {
	const [isOpen,setIsOpen] = useState(false);

	return (
			<div className={"c-layoutGlobal"}>
				<Header setIsOpen={setIsOpen} isOpen={isOpen}/>
				<Menu isOpen={isOpen}/>
				<main className={"c-layoutGlobal__main"}>
						{children}
				</main>


				{/* language=CSS */}
				<style jsx>
					{`
						.c-layoutGlobal{
							display : flex;
							flex-wrap: wrap;
						}
						.c-layoutGlobal__main{
							flex : 1 1 auto;
							padding : 10px 10px 10px 75px;
						}
					`}
				</style>
			</div>
	)
}