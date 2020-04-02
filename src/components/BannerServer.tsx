import React, { Component } from 'react'
import { FaDiscord } from 'react-icons/fa';
import bannerGif from '../assets/banner.gif'

export default class BannerServer extends Component {
    render() {
        return (
            <section className="banner-site">
                <img width="100%" src={bannerGif} alt="Moonside - Serveur GTA5 RP - Chargement" />
                <div className="content">
                    <h1>MoonSide</h1>
                    <h4>Serveur GTA5 RP - Francophone</h4>
                    <a href="https://discord.gg/6PCVYcF" target="_blank" rel="noopener noreferrer" className="btn-lg btn-secondary"><FaDiscord /> Nous rejoindre sur Discord</a>
                </div>
            </section>
        )
    }
}
