import {Drafts, FolderShared, ListAlt, Home, LinkedIn, GitHub, Twitter, Star} from "@material-ui/icons";
import variables from "../theme/variables"
import {useEffect, useState} from "react";
import Link from "next/link";


export default function MyMenu(props) {
	useEffect(() => {
		console.log('isOpen a changé', props.isOpen)
	}, [props.isOpen])

	return (
			<nav className={"c-menu"} data-open={props.isOpen}>
				<div className={"c-menu__listTop"}>

					<div className={"c-menu__list"}>
						<Link href={"/"}>
							<a title={"page d'accueil"}>
								<div className={"c-menu__listIcon"}>
									<Home fontSize={"inherit"} color={"inherit"}/>
								</div>
								<span className={"c-menu__listTxt"}>
									Accueil
								</span>
							</a>
						</Link>
					</div>
					<div className={"c-menu__list"}>
						<Link href={"/mon-parcours"}>
							<a title={"Parcours Bryan Schmitt"}>
								<div className={"c-menu__listIcon"}>
									<ListAlt fontSize={"inherit"} color={"inherit"}/>
								</div>
								<span className={"c-menu__listTxt"}>
								Mon Parcours
							</span>
							</a>
						</Link>
					</div>
					<div className={"c-menu__list"}>
						<Link href={"/mes-projets"}>
							<a title={"Projets Bryan Schmitt"}>
						<div className={"c-menu__listIcon"}>
							<FolderShared fontSize={"inherit"} color={"inherit"}/>
						</div>
						<span className={"c-menu__listTxt"}>
								Mes Projects
							</span>
							</a>
						</Link>
					</div>
					<div className={"c-menu__list"}>
						<Link href={"/me-contacter"}>
							<a title={"Formulaire de contact Bryan Schmitt"}>
								<div className={"c-menu__listIcon"}>
									<Drafts fontSize={"inherit"} color={"inherit"}/>
								</div>
								<span className={"c-menu__listTxt"}>
								Me Contacter
							</span>
							</a>
						</Link>
					</div>
					<div className={"c-menu__list"}>
						<div className={"c-menu__listIcon"}>
							<Star fontSize={"inherit"} color={"inherit"}/>
						</div>
						<span className={"c-menu__listTxt"}>
								Bonus
							</span>
					</div>
				</div>
				<div className={"c-menu__listBottom"}>
					<div className={"c-menu__list"}>
						<div className={"c-menu__listIcon is-linkedIn"}>
							<LinkedIn fontSize={"inherit"} color={"inherit"}/>
						</div>
						<span className={"c-menu__listTxt"}>
								Mon LinkedIn
							</span>
					</div>
					<div className={"c-menu__list"}>
						<div className={"c-menu__listIcon is-github"}>
							<GitHub fontSize={"inherit"} color={"inherit"}/>
						</div>
						<span className={"c-menu__listTxt"}>
								Mon Github
							</span>
					</div>
					<div className={"c-menu__list"}>
						<div className={"c-menu__listIcon is-twitter"}>
							<Twitter fontSize={"inherit"} color={"inherit"}/>
						</div>
						<span className={"c-menu__listTxt"}>
								Mon twitter
							</span>
					</div>
				</div>

				{/* language=CSS */}
				<style jsx>{`
					.c-menu{
						position : fixed;
						left: 0;
						top : 65px;
						bottom: 0;
						flex-direction: column;
						display : flex;
						justify-content: space-between;
						width : 65px;
						background : ${variables.background.primary};
						transition : all 0.1s ease;
						z-index : 100;
					}
					
					.c-menu[data-open="false"]{
						flex : 0 1 65px; 
					}
					.c-menu[data-open="false"] .c-menu__listTxt{
						display: none;
					}
					.c-menu[data-open="true"]{
						flex : 0 1 200px;
						width : 200px; 
					}
					.c-menu[data-open="true"] .c-menu__listTxt{
						display: block;
					}
					
					
					.c-menu[data-open="false"] .c-menu__list{
						height: 65px;
						display : flex;
						flex-wrap: wrap;
						justify-content: center;
						align-items: center; 
						width: 100%;
					}
					
					.c-menu[data-open="true"] .c-menu__list{
						height: 65px;
						display : flex;
						flex-wrap: wrap;
						justify-content: flex-start;
						align-items: center;
						width: 100%;
						padding : 10px;
					}
					.c-menu__listTxt{
						flex : 0 1 auto;
						color : white;
						font-size: 16px;
						align-self : center;
						margin-left: 10px;
					}
					
					.c-menu__listIcon{
						display: flex;
						align-self: center;
						justify-self: center;
						font-size: 32px;
						color : white;
						text-align : center;
						margin : 0;
						padding: 0;
					}
					.c-menu__listIcon.is-linkedIn{
						color : #0073B0;
					} 
					.c-menu__listIcon.is-twitter{
						color : #1DA1F2;
					}
					.c-menu__listIcon.is-github{
						color : tomato;
					}
					.c-menu__list:hover,.c-menu__list:hover .c-menu__listIcon,.c-menu__list:hover .c-menu__listTxt{
						color : ${variables.primaryColor};
						background: ${variables.background.secondary};
					}
				`}
				</style>
			</nav>


	)

}