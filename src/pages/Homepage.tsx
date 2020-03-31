import React, { Component } from 'react'
import BannerServer from '../components/BannerServer'
import SpotlightImage from "../components/SpotlightImage";
import { Container, Row, Carousel } from 'react-bootstrap'
import { FaEnvelope, FaGem, FaCommentDots, FaHeart } from 'react-icons/fa';
import YouTube from 'react-youtube';
import burningman from '../assets/burningman.png'
import plage from '../assets/plage.png'
import karting from '../assets/karting.png'
import taxi from '../assets/taxi.png'
import plainte from '../assets/plainte.png'

export default class Homepage extends Component {
    render() {
        const opts: any = {
            height: '480',
            width: '854',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                accelerometer: 1,
                allowfullscreen: 1,
                controls: 1,
            }
        };
        return (
            <div>
                <BannerServer />
                <div className="my-3">
                    <h2 className="text-center highlighted-title">Le RolePlay à son apogée</h2>
                    <p className="text-center">
                        Avec un staff très présent, vous pourrez rejoindre la ville de <b>Moonside</b> et jouer le rôle que vous souhaitez.
                        <b>Bebert</b> le fermier ? <b>Clyde</b> le lieutenant de LSPD ? <b>Travis</b> le bras droit des <b>Bloods</b> ?
                        Rejoins cette ville en constante évolution et saisis toute opportunité pour développer ton univers !
                    </p>

                    <SpotlightImage imageRight={false} image={burningman} title="Vos scènes. Vos choix." texte="Une multitude de péripéties et de décisions contraindront votre RP. Saurez-vous en faire bon usage ?" />

                    {/*                     <div className="iframe-container mx-auto my-3">
                        <YouTube
                            videoId="ZeRt-u9xRYo"
                            opts={opts}
                        />
                    </div> */}
                    <div className="my-3">
                        <Container>
                            <Row>
                                <ul className="features col-sm-12">
                                    <li className="col-sm-3">
                                        <span className="wrapper-major">
                                            <FaEnvelope className="icon-major" />
                                        </span>
                                        <h3>Accès libre</h3>
                                    </li>
                                    <li className="col-sm-3">
                                        <span className="wrapper-major">
                                            <FaGem className="icon-major" />
                                        </span>
                                        <h3>Légal &amp; Illégal</h3>
                                    </li>
                                    <li className="col-sm-3">
                                        <span className="wrapper-major">
                                            <FaCommentDots className="icon-major" />
                                        </span>
                                        <h3>Evénements &amp; Soirées</h3>
                                    </li>
                                    <li className="col-sm-3">
                                        <span className="wrapper-major">
                                            <FaHeart className="icon-major" />
                                        </span>
                                        <h3>Staff actif</h3>
                                    </li>
                                </ul>
                            </Row>
                        </Container>
                    </div>
                </div>

                <div className="my-3 pt-2">
                    <h2 className="text-center highlighted-title">Disponible seulement sur Moonside</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={karting}
                                alt="Lieux inédits"
                            />

                            <Carousel.Caption>
                                <h3>Lieux inédits</h3>
                                <p>Courses de karting, locations de planches de surf, fastfood, bar de bikers, ...</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={plage}
                                alt="Regroupement à la plage"
                            />
                            <Carousel.Caption>
                                <h3>Evennements organisés par le staff</h3>
                                <p>Le staff organise des évennements pour les citoyens (élections, soirées, ...) et vous aide à organiser les votre.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={taxi}
                                alt="Métiers exclusifs"
                            />
                            <Carousel.Caption>
                                <h3>Métiers exclusifs et retravaillés</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={burningman}
                                alt="Trafics et illégal extrèmes"
                            />
                            <Carousel.Caption>
                                <h3>Illégal poussé au paroxysme</h3>
                                <p>Trafics de drogues inédits, scènes travaillées, police efficace. L'illégal n'aura jamais autant eu le goût du risque.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={plainte}
                                alt="Immersion maximale"
                            />
                            <Carousel.Caption>
                                <h3>Immersion maximale</h3>
                                <p>Dépot de plainte, candidature pôle emploi, Twitter ... Une fois en jeu, plus besoin de Discord !</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="pb-3"></div>
            </div>
        )
    }
}
