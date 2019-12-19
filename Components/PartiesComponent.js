import React from 'react';
import { Link } from 'react-router-dom';

export default class PartiesComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {parties: []};

        this.renderParties = this.renderParties.bind(this);
    }

    componentDidMount() {
        this.fetchParties();
    }

    fetchParties() {
        fetch("/parties.json").then(function (response) {
            return response.json();
        }).then(this.renderParties);
    }

    renderParties(parties) {
        parties = parties || [];
        this.setState({parties: parties});
    }

    render() {
        const listItems = this.state.parties.map((party) =>
            <li key={party.id}>
                <Link to={"/parties/" +  party.id}>{party.title}</Link>
                <Link to={"/parties/" +  party.id + "/participants"}>Participants</Link>
            </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}
