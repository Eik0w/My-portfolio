import variables from "../theme/variables";
import {useState} from "react";
import axios from "axios";
import apiUrl from "../config";

export default function Contact(props) {
	const [name,setName] = useState('');
	const [lastName,setLastName ] = useState('');
	const [mail,setMail] = useState('');
	const [object,setObject] = useState('');
	const [message,setMessage] = useState('');

	const handleInputChange = (e) => {
		switch (e.currentTarget.name){
			case 'firstname' :
				setName(e.currentTarget.value);
				break;
			case 'lastname' :
				setLastName(e.currentTarget.value);
				break;
			case 'email' :
				setMail(e.currentTarget.value);
				break;
			case 'object' :
				setObject(e.currentTarget.value);
				break;
			case 'message' :
				setMessage(e.currentTarget.value);
				break;
			default :
				return;
		}
	}

	const handleSubmit = () => {
		var objMail = {
			to : 'bryan.schmitt.pro@gmail.com',
			from : mail,
			subject : object,
			text : message,
			html : `<strong> Message de la part de : ${name} ${lastName} - <i>(${mail})</i> : </strong> <br/> ${message}`
		}
		axios.post(apiUrl + '/api/sendMail',{objMail}).then(res => {
			console.log('coucou fin axios : ', res);
			console.log(res.data);
		})
		console.log(objMail);
	}

	return (
			<article className={"c-grid"}>
				<section className={"c-grid__contact"}>
					<section className={"c-grid__titlePart"}><h2 className={"c-grid__titlePart"}>Me contacter :</h2></section>
					<section className={"c-grid__contact is-information"}>
						<section className={"c-grid__cblock is-input is-red is-cFirstname"} >
							<input type={"text"} name={"firstname"} onChange={handleInputChange}/>
						</section>
						<section className={"c-grid__cblock is-input is-orange is-cLastname"}>
							<input type={"text"} name={"lastname"}  onChange={handleInputChange}/>
						</section>
					</section>
					<section className={"c-grid__contact is-headerMail"}>
						<section className={"c-grid__cblock is-input is-pink is-big is-cMail"}>
							<input type={"text"} name={"email"}  onChange={handleInputChange}/>
						</section>
						<section className={"c-grid__cblock is-input is-blue is-big is-cObject"}>
							<input type={"text"} name={"object"}  onChange={handleInputChange}/>
						</section>
						<section className={"c-grid__cblock is-text is-green is-cMessage"}>
							<textarea name={"message"}  onChange={handleInputChange}/>
						</section>
					</section>
					<section className={"c-grid__contact is-submitContainer"}>
						<section className={"c-grid__cblock is-submit is-blue"} onClick={handleSubmit}>
							Envoyer
						</section>
					</section>
				</section>

				{/*language=CSS*/}
				<style jsx>{`
            .c-grid__contact {
                display: flex;
                flex-wrap: wrap;
                flex: 1 1 100%;
                max-width: 1280px;
                margin: 0 auto;
            }
            
            .is-submitContainer{
            	justify-content: flex-end;
            }
            
            .c-grid__cblock.is-submit{
            	flex : 0 1 200px;
            	align-items: center;
            	align-content: center;
            	color : white;
            	font-size: 22px;
            	font-weight: bold;
            	text-align: center;
            	line-height: 60px;
            	cursor : pointer;
            } 

            .c-grid__cblock {
                flex: 0 1 49%;
                margin: 0.5%;
                height: 60px;
                align-content: center;
                justify-content: center;
                position : relative;
            }

            .is-big {
                flex: 1 0 99%;
            }
            .is-cMessage {
                flex: 1 0 99%;
                height: 400px;
            }
            .c-grid__contact input[type="text"],.c-grid__contact textarea{
            	position : absolute;
            	height: 60px;
            	width : 100%;
            	border : 0px none;
            	left: 0;
            	bottom: 0;
            	right: 0;
            	top: 0;
            	background: transparent;
            	text-align: center;
            	color : white;
            	font-size: 18px;
            }
            .c-grid__contact textarea{
	            height: 400px;
	            text-align : left;
	            font-family: 'Maven Pro', sans-serif;
	            padding-top : 20px;
            }
            .is-cFirstname:before{
						  display: block;
						  color : white;
						  position: absolute;
						  left : 5px;
						  top : 5px;
						  font-size: 12px;
						  content : "${variables.subtitle.cFirstname} :";
						}
						.is-cLastname:before{
						  display: block;
						  color : white;
						  position: absolute;
						  left : 5px;
						  top : 5px;
						  font-size: 12px;
						  content : "${variables.subtitle.cLastname} :";
						}
						.is-cMail:before{
						  display: block;
						  color : white;
						  position: absolute;
						  left : 5px;
						  top : 5px;
						  font-size: 12px;
						  content : "${variables.subtitle.cMail} :";
						}
						.is-cObject:before{
						  display: block;
						  color : white;
						  position: absolute;
						  left : 5px;
						  top : 5px;
						  font-size: 12px;
						  content : "${variables.subtitle.cObject} :";
						}
						.is-cMessage:before{
						  display: block;
						  color : white;
						  position: absolute;
						  left : 5px;
						  top : 5px;
						  font-size: 12px;
						  content : "${variables.subtitle.cMessage} :";
						}
				`}
				</style>
			</article>

	);
}