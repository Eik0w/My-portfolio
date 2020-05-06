import variables from "../theme/variables";

export default function App({Component, pageProps}) {


	return (
			<>
				<Component {...pageProps}/>
				{/* language=CSS */}
				<style global jsx>{`
        body{
          margin: 0;
          padding: 0; 
          margin-top: 65px;
          background: ${variables.background.secondary};
          font-family: 'Maven Pro', sans-serif;
        }
        *{
            box-sizing: border-box;
        }
        .c-grid{
            max-width: 1280px;
            margin : 0 auto;
            padding : 10px;
            display : flex;
            flex-wrap: wrap;
        }
        .c-grid__block{
            flex : 0 0 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height : 200px;
            margin: 5px;
            overflow: hidden;
            color : white;
            font-size: 70px;
            font-weight: normal;
            text-transform: uppercase;
            transition: all 0.2s linear;
            position : relative;
        }
        .c-grid__titlePart{
        	flex : 1 1 100%;
        	color : #fff;
        	font-size : 25px;
        	text-transform : uppercase;
        	letter-spacing: 0.15em;
        	padding-left : 5px;
        }
        .c-grid__block:hover{
            box-shadow: 0 0 15px;
        }
        .is-doubleW{
            flex : 0 0 410px;
        }
        .is-ico{
        	font-size: 100px;
        }
        .is-big{
            flex : 0 0 840px;
            height : 410px;
            font-size: 20px;
            padding : 20px;
            display: block;
            text-align: left;
            text-transform: none;
        }
        .is-mediumF{
            font-size: 42px;
        }
        .is-smallF{
            font-size: 25px;
        }
        .is-profil{
						background: url("/img/profil.jpg") no-repeat 0 0 transparent;
						background-size: cover;
				}
				.is-oxatis{
						background: url("/img/oxatis.png") no-repeat center center #192341;
						background-size: contain;
				}
				.is-react{ 
					background: #fcfcfc!important;
				}
				.is-ps{
					background : #a0cbfe!important;
				}
				.is-oxatis:before{
				    display: block;
				    color : white;
				    position: absolute;
				    left : 5px;
				    top : 5px;
				    font-size: 12px;
				    content : "${variables.subtitle.oldEntr} :";
				}
				.is-cv:before{
				display: block;
			    color : white;
			    position: absolute;
			    left : 5px;
			    top : 5px;
			    font-size: 12px;
			    content : "${variables.subtitle.cv} :";
				}
				.is-oxatis:hover{
				    box-shadow: 0 0 15px #192341; 
				}
				.is-js{
					background : #f7e018!important;
					border : 0px none!important;
				}
				.is-js:hover{
					box-shadow: 0 0 15px #f7e018!important;
				}
				.is-php{
					background: #36447f!important; 
					border : 0px none!important;
				}
				.is-php:hover{
					box-shadow: 0 0 15px #36447f!important;
				}
				.is-html{
					background: #e44d26!important; 
					border : 0px none!important;
				}
				.is-html:hover{
					box-shadow: 0 0 15px #e44d26!important;
				}
				.is-css{
					background: #379ad6!important; 
					border : 0px none!important;
				} 
				.is-css:hover{
					box-shadow: 0 0 15px #379ad6!important;
				}
				.is-dve{
						background: url("/img/dve.jpg") no-repeat center center #ffffff;
						background-size: contain;
				}
				.is-dve:before{
				    display: block;
            color : #181818;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.oldEntr} :";
				}
				.is-game:before{
				    display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.game} :";
				}
				.is-cinema:before{
					  display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.cinema} :";
				}
				.is-fly:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.fly} :";
        }
        .is-newTech:before{
						display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.newTech} :";
				}
				.is-foot:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.foot} :";
				}
				.is-brico:before{
            display: block;
            color : #ffffff;
            position: absolute; 
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.brico} :";
				}
				.is-mlp{
						background: url("/img/mlp.png") no-repeat center center #ffffff;
						background-size: contain;
				}
				.is-mlp:before{
            display: block;
            color : #181818;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.oldEntr} :";
        }
				.is-travaux{
						background: url("/img/travaux.jpg") no-repeat center center #ffffff;
						background-size: contain;
				}
				.c-grid__block.is-linkedIn{
					background : url("/img/linkedin.png") no-repeat center center #007BB6;
					background-size : contain;
				}
				
				.c-grid__block.is-linkedIn:hover{
					box-shadow : 0 0 10px #007BB6;
				}
				.is-skill{
					border : 1px solid #e3e3e3;
				}
				.c-grid__block.is-linkedIn:before{
						display: block;
            color : #fff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.linkedin} :";
				}
				.c-grid__block.is-github:before{
						display: block;
            color : #fff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.github} :";
				}
				.is-travaux:before{
            display: block;
            color : #181818;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.actualEntr} :";
        }
        .is-serious:before{
         		display: block;
            color : #fff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.serious} :";
        }
        .is-motivated:before{
        		display: block;
            color : #fff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.motivated} :";
        }
        .is-name:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.name} :";
        }
        .is-xp:before{
         		display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.xp} :";
        }
        .is-firstName:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.firstName} :";
        }
        .is-age:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.age} :";
        }
        .is-location:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.location} :";
        }
        .is-tech:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            text-transform: uppercase;
            font-size: 12px;
            content : "${variables.subtitle.tech} :";
        }
        .is-pres:before{
            display: block;
            color : #ffffff;
            text-transform: uppercase;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.perso} :";
        }
        .is-poste:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.poste} :";
        }
        .is-level:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.level} :";
        }
        .is-drive:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.drive} :";
        }
        .is-maried:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.maried} :";
        }
        .is-etabName:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.etabName} :";
        }
        .is-diplome:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.diplome} :";
        }
        .is-etabLink:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.etabLink} :";
        }
        .is-begin:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.begin} :";
        }
        .is-end:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.end} :";
        }
        .is-entrName:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.entrName} :";
        }
        .is-statut:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px; 
            content : "${variables.subtitle.statut} :";
        }
         .is-host:before{
            display: block;
            color : #484848;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px; 
            content : "${variables.subtitle.host} :";
        }
        .is-pLink:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.pLink} :";
        }
        .is-entrLink:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.entrLink} :";
        }
        .is-dept:before{
            display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.dept} :";
        }
        .is-projectPres:before{
         		display: block;
            color : #ffffff;
            position: absolute;
            left : 5px;
            top : 5px;
            font-size: 12px;
            content : "${variables.subtitle.projectPres} :";
        }
        .is-ovh{
							background: url("/img/ovh.png") no-repeat center center white;
							background-size: contain;
						}
				.is-ovh:hover{
						box-shadow: 0 0 15px #fff; 
				}
        .is-orange{
            background: ${variables.gridColor.orange};
        }
        .is-orange:hover{
            box-shadow: 0 0 15px ${variables.gridColor.orange};
        }
        .is-red{
            background: ${variables.gridColor.red};
        }
        .is-white{
        	background: #ffffff;
        }
        .is-red:hover{
            box-shadow: 0 0 15px ${variables.gridColor.red};
        }
        .is-blue{
            background: ${variables.gridColor.blue};
        }
        .is-blue:hover{
            box-shadow: 0 0 15px ${variables.gridColor.blue};
        }
        .is-pink{
            background: ${variables.gridColor.pink};
        }
        .is-pink:hover{
            box-shadow: 0 0 15px ${variables.gridColor.pink};
        }
        .is-green, .is-portfolio{
            background: ${variables.gridColor.green};
        }
        .is-green:hover, .is-portfolio:hover{
            box-shadow: 0 0 15px ${variables.gridColor.green};
        }
        .is-tarif{
        	background: #f67e62 ;
        }
        .is-tarif:hover{
        	box-shadow: 0 0 15px #f67e62;
        }
        .is-movie{
        	background: #f50057;
        }
        .is-movie:hover{
        	box-shadow: 0 0 15px #f50057;
        }
        .is-roadmap{
          background : #3a5576;
        }
        .is-roadmap:hover{
          box-shadow : 0 0 15px #3a5576;
        }
        .is-mastermind{
        	background: #333;
        }
        .is-mastermind:hover{
        	box-shadow: 0 0 15px #333;
        }
        
        /* Formation & Experience */
        	.c-grid__formation{
						display: flex;
						flex-wrap: wrap;
						flex : 0 1 100%;
						margin-bottom: 0.5%;
						transition: all 0.3s ease;
					}
					.c-grid__formation:hover{
						background: #fff;
					}
					.c-grid__formationLeft{
						flex : 0 1 15.555%;
						display: flex;
						flex-wrap: wrap;
						margin : 0.5%;
					}
					.c-grid__formationRight{
						flex : 0 1 83.444%;
						display: flex;
						flex-wrap: wrap;
					}
					.is-formation {
						flex : 0 0 99%;
						align-self : start;
						margin: 0.5%;
						top : 75px;
						position : sticky;
						padding: 5px;
					}
					.c-grid__formationImg{
						max-width: 100%;
						max-height: 100%;
						width: auto;
						height: auto;
					}
					.is-insideLink{
						line-height: 215px;
						position: absolute;
						left: 0;
						top : 0;
						bottom: 0;
						right: 0;
						text-decoration: none;
						color : white;
						font-size: 100px;
					}
					.c-grid__homeContainer {
                display: flex;
                flex-wrap: wrap;
                flex: 1 1 100%;
            }

            .c-grid__homeLeftPart {
                flex: 0 0 840px;
            }

            .c-grid__homeRightPart {
                display: flex;
                flex-wrap: wrap;
                flex: 0 0 420px;
            }

            .c-grid__inTxt {
                width: 100%;
                display: block;
            }
        @media screen and (max-width: 1360px) {
        .c-grid{
            max-width:100%;
            margin : 0 auto;
            padding : 10px;
            display : flex;
            flex-wrap: wrap;
        }
         .c-grid__block{
            flex : 0 0 15.66666%;
            margin : 0.5%;
            }
            .is-doubleW{
            flex : 0 0 32.33333%;
            margin: 0.5%;
        }
        .is-big{
            flex : 0 0 64%;
            height : 410px;
            font-size: 18px;
            padding : 20px;
            display: block;
            text-align: left;
            text-transform: none;
        }
         
        /* Formation & Experience */
        	.c-grid__formationRight .c-grid__block.is-doubleW{
				  		flex : 0 1 39%;
				  	}
				  	.c-grid__formationRight .c-grid__block{
				  		flex : 0 1 19%;
				  	}
				  	.c-grid__formationLeft .c-grid__block{
				  		flex : 1 1 100%;
				  	}
				   
                .c-grid__homeLeftPart {
                    flex: 0 0 66.666%;
                    align-items: flex-start;
                }

                .c-grid__homeRightPart {
                		flex : 0 0 32.73333%;
                    display: flex;
                    margin : 0.25%;
                    flex-wrap: wrap;
                    align-items: flex-start;
                }
                .c-grid__homeRightPart .c-grid__block.is-doubleW, .c-grid__homeLeftPart .c-grid__block.is-doubleW {
                	flex : 0 0 99%;
                	margin : 0.5%;
                	
                }
                .c-grid__homeRightPart .c-grid__block.is-big, .c-grid__homeLeftPart .c-grid__block.is-big{
                	flex : 0 0 100%; 
                	margin : 0.5%!important;
                }
                .c-grid__homeLeftPart .c-grid__block, .c-grid__homeRightPart .c-grid__block{
                	flex : 0 0 49%;
                	margin: 0.5%;
                } 
               	}
            
         @media screen and (max-width: 1100px) {
            .c-grid__block{
                font-size: 50px;
            }
            .is-mediumF{
                font-size: 30px;
            }
            .is-smallF{
            font-size: 16px;
        }
            .is-big{
                font-size: 16px;
                display: flex;
                align-self: center;
                flex-wrap: wrap;
            }
            .is-big p{
                flex : 1 1 100%;
            }
         }
         @media screen and (max-width: 900px) {
         		.c-grid__block{
              flex : 1 1 100%;
              margin : 0.5% 0 0.5% 0;
            }
            .is-profil{
							background: url("/img/profil.jpg") no-repeat center center white;
							background-size: contain;
						}
						 	.c-grid__block{
				   		flex : 1 1 100%!important;
				   	}
				   	.c-grid__block.is-doubleW{
				   		flex : 1 1 100%!important;
				   	}
				   	.c-grid__formationLeft{
						flex : 0 1 39%;
						
					}
					.c-grid__formationRight{
					flex : 0 1 59%;
					}
					.is-mediumF{
						font-size: 18px;
					}
						.c-grid__homeLeftPart,  .c-grid__homeRightPart {
                    flex : 1 1 100%;
                }
                .is-big{
                  height: auto!important;
                  padding: 20px 10px 10px 10px;
                }
         }
        
       
      `}</style>
			</>
	)
}