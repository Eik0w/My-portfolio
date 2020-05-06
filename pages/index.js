import Head from 'next/head'
import Menu from "../components/Menu";
import LayoutGlobal from "../layout/LayoutGlobal";
import Home from "../components/Home";
import axios from "axios";
import apiUrl from "../config";
import variables from "../theme/variables";

export default function Index(props) {
	return (
			<div className="container">
				<Head>
					<title>Bryan Schmitt - Développeur Front-End - Portfolio</title>
					<link rel="icon" href="/favicon.png"/>
					<link href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap" rel="stylesheet"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				</Head>
				<LayoutGlobal>
					<Home info={props.info}/>
				</LayoutGlobal>
			</div>
	)
}

Index.getInitialProps = async function () {
	const req = await axios.get(apiUrl + '/api/home');
	const rsp = await req.data;
	return {
		info: rsp
	}

};
