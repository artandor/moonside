import React, { Component } from 'react'
import { Nav, Row, Col } from 'react-bootstrap'
import JobTaxi from '../components/jobs/JobTaxi'
import Job, { JobCategory } from '../data/models/Job'
import { Badge } from "react-bootstrap";
import JobPablitoRestau from '../components/jobs/JobPablitoRestau';
import { FaDotCircle } from 'react-icons/fa';

export default class JobsPage extends Component {
    state = {
        selectedNavJob: 'Gouvernement',
        selectedJob: { name: '', icon: null, category: null, colorClass: "", hasPage: false },
    }

    jobs: Job[] = [
        { name: 'Ambulancier (EMS)', icon: null, category: JobCategory.SERVICE, colorClass: "service" },
        { name: 'Ammunitions', icon: null, category: JobCategory.SHOP, colorClass: "shop" },
        { name: 'Auto-école', icon: null, category: JobCategory.SERVICE, colorClass: "service" },
        { name: 'Avocat', icon: null, category: JobCategory.SERVICE, colorClass: "service" },
        { name: 'Burgershot', icon: null, category: JobCategory.RESTAU, colorClass: "bg-success" },
        { name: 'Commerçant', icon: null, category: JobCategory.SHOP, colorClass: "shop" },
        { name: 'Concessionaire', icon: null, category: JobCategory.SHOP, colorClass: "shop" },
        { name: 'Gouvernement', icon: null, category: JobCategory.SERVICE, colorClass: "service" },
        { name: 'LSPD', icon: null, category: JobCategory.SERVICE, colorClass: "service" },
        { name: 'Mécanicien', icon: null, category: JobCategory.SERVICE, colorClass: "service" },
        { name: 'Nightclub', icon: null, category: JobCategory.SOIREE, colorClass: "soiree" },
        { name: 'Pablito Restau', icon: null, category: JobCategory.RESTAU, colorClass: "bg-success", hasPage: true },
        { name: 'Pibwasser', icon: null, category: JobCategory.SHOP, colorClass: "shop" },
        { name: 'Tabagiste', icon: null, category: JobCategory.PREMIERE, colorClass: "premiere" },
        { name: 'Taxi', icon: null, category: JobCategory.SERVICE, colorClass: "service", hasPage: true },
        { name: 'Unicorn', icon: null, category: JobCategory.SOIREE, colorClass: "soiree" },
        { name: 'Vigneron', icon: null, category: JobCategory.PREMIERE, colorClass: "premiere" },
        { name: 'Yellowjack', icon: null, category: JobCategory.SOIREE, colorClass: "soiree" },

    ]

    componentDidMount() {
        this.setState({selectedJob: this.jobs.find(job => job.name === this.state.selectedNavJob)})
    }

    render() {
        return (
            <div className="py-3">
                <Row>
                    <Col md={3} xs={12}>
                        <Nav variant="tabs" className="flex-column justify-content-center"
                            activeKey={this.state.selectedNavJob} onSelect={(event: any) => this.setState({
                                selectedNavJob: event,
                                selectedJob: this.jobs.find(job => job.name === event)
                            })}>
                            {this.jobs.map((job: Job) => {
                                return (
                                    <Nav.Item key={job.name}>
                                        <Nav.Link eventKey={job.name}><FaDotCircle color={job.hasPage ? 'green': 'orange'}/> {job.name}</Nav.Link>
                                    </Nav.Item>)
                            })}
                        </Nav>
                    </Col>
                    <Col md={9} xs={12}>
                        <div>
                            <h2>{this.state.selectedJob.name}</h2>
                            <div>
                                <Badge pill className={"job-category " + this.state.selectedJob.colorClass}>{this.state.selectedJob.category}</Badge>
                                {this.switchJobComponents()}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    switchJobComponents() {
        switch (this.state.selectedNavJob) {
            case "Taxi": {
                return <JobTaxi />;
            }
            case "Pablito Restau": {
                return <JobPablitoRestau />;
            }
            default:
                return <p>Ce job n'a pas encore sa page. Créez un ticket sur discord si vous souhaitez la créer.</p>;
        }
    }
}
