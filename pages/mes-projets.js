import Head from "next/head";
import LayoutGlobal from "../layout/LayoutGlobal";
import axios from "axios";
import apiUrl from "../config";
import Projects from "../components/Projects";

export default function projects(props) {
	return (
			<div className="container">
				<Head>
					<title>Bryan Schmitt - Développeur Front-End - Mes projets personnels</title>
				</Head>
				<LayoutGlobal>
					<Projects info={props.info}/>
				</LayoutGlobal>
			</div>
	)
}
projects.getInitialProps = async function () {
	const req = await axios.get(apiUrl + '/api/projets');
	const rsp = await req.data;
	return {
		info: rsp.projets
	}
};

