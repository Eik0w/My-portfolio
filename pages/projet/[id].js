import Head from "next/head";
import LayoutGlobal from "../../layout/LayoutGlobal";
import Home from "../../components/Home";
import {useRouter} from "next/router";
import axios from "axios";
import apiUrl from "../../config";
import Project from "../../components/Project";

export default function projetId (props) {
const router = useRouter();

	return (
			<div className="container">
				<Head>
					<title>Bryan Schmitt - Développeur Front-End - Projet Frontend {router.query.id}</title>
					<link rel="icon" href="/favicon.png"/>
				</Head>
				<LayoutGlobal>
					<Project info={props.info}/>
				</LayoutGlobal>
			</div>
	)
}

projetId.getInitialProps = async function ({query}) {
	const req = await axios.get(apiUrl + '/api/projet/'+query.id);
	const rsp = await req.data;
	return {
		info: rsp
	}
};