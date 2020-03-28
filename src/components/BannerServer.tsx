import React, { Component } from 'react'
import CSS from "csstype";

export default class BannerServer extends Component {
    render() {
        return (
            <section>
                <img width="100%" src="http://aristonia.fr//img/wp.gif" alt="Aristonia - Serveur GTA5 RP - Chargement" />
                <div className="content">
                    <h1>Moonside</h1>
                    <p>Serveur GTA5 RP - Francophone</p>
                    <a href="https://discord.gg/AFqbEXE" target="_blank" className="button wide scrolly">Discord</a>
                </div>
            </section>
        )
    }
}
