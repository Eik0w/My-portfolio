import variables from "../theme/variables";
import {Menu} from "@material-ui/icons";

	export default function Header(props) {

		const handleMenuClick = () => {
			if(props.isOpen)
				props.setIsOpen(false);
			else
				props.setIsOpen(true);
		};
	return(
			<header className={"c-header"}>
				<div className={"c-header__menuBtn"} onClick={handleMenuClick}>
					<div className={'c-header__iconContainer'}>
						<Menu color={"inherit"} fontSize={"inherit"}/>
					</div>
				</div>
				<h1 className={"c-header__title"}>
					Bryan Schmitt - Développeur Front-End
				</h1>

				{/* language=CSS */}
				<style jsx>{`
					.c-header{
						width: 100%;
						height: 65px;
						background : ${variables.background.primary};
						display : flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: space-between;
						position: fixed; 
						top : 0;
						left: 0;
						right: 0;
						z-index: 100;
					}
					.c-header__menuBtn{
						width : 65px;
						height : 65px;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.c-header__menuBtn:hover,.c-header__menuBtn:hover .c-header__iconContainer{
						color : ${variables.primaryColor};
						background: ${variables.background.secondary};
					}
					.c-header__iconContainer{
						color : white;
						font-size: 32px;
					}
					.c-header__title{
						flex : 0 1 auto;
						font-size: 25px;
						color : white;
						font-weight: normal;
						padding-right: 10px;
					}
					.c-header__linkContainer{
						flex : 0 1 auto;
					}
					@media screen and (max-width: 900px) {
						.c-header__title{
							font-size: 14px;
						}
					}
				`}</style>
			</header>
	)
}