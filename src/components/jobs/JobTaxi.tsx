import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import taxiMoldu from '../../assets/images/jobs/taxiMoldu.jpg'

export default class JobTaxi extends Component {
    render() {
        return (
            <div className="text-justify">
                <blockquote className="blockquote">
                    <p className="mb-0">Taxi Cardie - Le taxi qui vous sauve la vie</p>
                    <footer className="blockquote-footer">Dominic Politiet</footer>
                </blockquote>
                <h3>Présentation de l'entreprise</h3>
                <div>
                    <p>
                        Entreprise à taille humaine qui vise à servir la ville et qui placera les clients au centre de son attention,
                        l’objectif est que les employés ne se sentent pas isolés dans ce métier très solitaire et superficiel dont fait partie le taxi.
                        C’est pourquoi l’entreprise aura une politique sociale poussée afin de faire communiquer ses collaborateurs.
                    </p>
                </div>

                <h3>Tarifs & Salaires</h3>
                <div>
                    <ul>
                        <li>Boss - 2300€/mois & 125€/km</li>
                        <li>Chauffeur Privé - 1900€/mois & 125€/km</li>
                        <li>Taxi Expert - 1400€/mois & 75€/km</li>
                        <li>Taxi Novice - 1150€/mois & 75€/km</li>
                        <li>Taxi Recrue - 900€/mois & 75€/km</li>
                    </ul>
                </div>

                <div className="spotlight">
                    <Row>
                        <Col xs={12}>
                            <Image rounded fluid src={taxiMoldu} />
                        </Col>
                        <Col xs={12} className="content py-3">
                            <h2>Ne vous ennuyez pas</h2>
                            <p>Même quand les joueurs n'ont pas besoin de nous, les citoyens (moldus)
                de la ville ont besoin de se déplacer. Faites vos missions avec eux et soyez récompensés.</p>
                        </Col>
                    </Row>
                </div>

                <h3>A propos du patron</h3>
                <div>
                    <p>
                        Moi, Dominic Politiet, je viens de Russie Sibérienne où j’ai grandi dans conditions difficile. Avant de venir à MoonSide j’ai pu assister à la
                        déchéance capitaliste de la ville d’Aristonia. Depuis la mort de mon meilleur ami Dorian Vladimir en voiture, je souhaite devenir chauffeur de
                        taxi afin de ne plus voir l’horreur d’un accident se produire. Je suis professionnel et capable d’assurer sécurité des clients. J’ai géré en
                         Russie des groupes armés dans des opérations de sauvetages en Sibérie et suis donc capable de gérer cette modeste entreprise.</p>
                </div>
            </div>
        )
    }
}
