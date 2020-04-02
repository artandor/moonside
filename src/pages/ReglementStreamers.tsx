import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class ReglementStreamers extends Component {
    render() {
        return (
            <div className="py-2">
                <h2>Règlement adressé aux streamers</h2>
                <p>Les règles spécifiques aux streamers évoquées dans le règlement sont les suivantes : </p>
                <ul>
                    <li>Ne pas se rendre sur les points illégaux en live (Récolte drogue /  Traitement etc)</li>
                    <li>Mettre en place un cache map pour éviter le stream hack. Nous proposerons prochainement un cache map spécial <b>Moonside</b>.</li>
                    <li>Ne pas utiliser sa communauté afin de nuire au serveur</li>
                </ul>
                <p>Tout manquement lors de vos live RP sera sanctionné et votre stream retiré de cette page.</p>
{                <p>En demandant d'afficher votre stream sur cette page, vous vous garantissez une publicité gratuite, en échange nous vous demandons l'exclusivité,
                c'est à dire que vous ne pourrez pas stream de GTA RP sur un autre serveur, sous peine d'être retiré de cette page.</p>}
                <Button as={Link} to="/streams">Retour aux streams</Button>
            </div>
        )
    }
}
