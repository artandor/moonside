import React, { Component } from 'react'
import BannerServer from '../components/BannerServer'
import SpotlightImage from "../components/SpotlightImage";
import { Container, Row } from 'react-bootstrap'
import { FaEnvelope, FaGem, FaCommentDots, FaHeart } from 'react-icons/fa';
import YouTube from 'react-youtube';
import burningman from '../assets/burningman.png'

export default class Homepage extends Component {
    render() {
        const opts: any = {
            height: '480',
            width: '854',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                accelerometer: 1,
                allowfullscreen: 1,
                controls: 0,
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

                    <div className="iframe-container mx-auto my-3">
                        <YouTube
                            videoId="ZeRt-u9xRYo"
                            opts={opts}
                        />
                    </div>
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
                <SpotlightImage imageRight={false} image={burningman} title="Vos scènes. Vos choix." texte="Une multitude de péripéties et de décisions contraindront votre RP. Saurez-vous en faire bon usage ?" />
            </div>
        )
    }
}
