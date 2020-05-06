import Head from "next/head";
import LayoutGlobal from "../layout/LayoutGlobal";
import Home from "../components/Home";
import Parcours from "../components/Parcours";
import axios from "axios";
import apiUrl from "../config";

export default function parcours(props) {
	return (
			<div className="container">
			<Head>
				<title>Bryan Schmitt - Développeur Front-End - Mon parcours professionnel</title>
			</Head>
				<LayoutGlobal>
					<Parcours info={props.info}/>
				</LayoutGlobal>
			</div>
			)
}
parcours.getInitialProps = async function () {
	const req = await axios.get(apiUrl + '/api/parcours');
	const rsp = await req.data;
	return {
		info: rsp
	}
};