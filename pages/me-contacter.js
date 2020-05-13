import Head from "next/head";
import LayoutGlobal from "../layout/LayoutGlobal";
import Contact from "../components/Contact";

export default function ContactPage() {
	return (
			<div className="container">
				<Head>
					<title>Bryan Schmitt - Développeur Front-End - Formulaire de contact</title>
					<link rel="icon" href="/favicon.png"/>
					<link href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap" rel="stylesheet"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				</Head>
				<LayoutGlobal>
					<Contact/>
				</LayoutGlobal>
			</div>)
}