import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export class FetchClientData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            loading: true
        };
        this.renderClientTable = this.renderClientTable.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        //fetch('/api/Client')
        //    .then(response => response.json())
        //    .then(data => {
        //        this.setState({ clients: data, loading: false });
        //    });
    }
    componentDidMount() {
        fetch('/api/Client')
            .then(response => response.json())
            .then(data => {
                this.setState({ clients: data, loading: false });
            });
    }
    handleDelete(id) {
        if (!window.confirm("Do you want to delete this client?"))
            return;
        else {
            fetch('api/Client/' + id, { method: 'delete' }).then(data => {
                this.setState({
                    clients: this.state.clients.filter(rec => rec.clientId != id)
                })
            });
        }
    }

    handleEdit(id) {
        this.props.history.push("/edit-client-data/" + id);

    }
    renderClientTable(clients) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>CreatedDate</th>
                        <th>Amount</th>
                        <th>Address</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map((client, index) =>
                            <tr key={client.clientId}>
                                <td>{index + 1}</td>
                                <td>{client.name}</td>
                                <td>{format(new Date(client.createdTime),"DD/MM/YYYY")}</td>
                                <td>{client.amount}</td>
                                <td>{client.address}</td>
                                <td>{client.website}</td>
                                <td>
                                    <a className="action" onClick={(id) => this.handleEdit(client.clientId)}>Edit</a>|
                                    <a className="action" onClick={(id) => this.handleDelete(client.clientId)}>Delete</a>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderClientTable(this.state.clients);
        return (
            <div>
                <h1>Clients' information</h1>


                <p> <Link to="/add-client-data">Create New Client </Link>
                </p>
                {contents}
            </div>
        )
    }
}

export default FetchClientData;

//export class ClientData {
//    ClientId: '0'
//    PacketType: '0';
//    Amount: "";
//    Email: "";
//    PhoneNumber: "";
//    Address: "";
//    Name: ""
//    Website: ""
//    GeneralInfo: ""
//    AboutMe: ""
//    OfficePhoneNumber: ""
//    Country: ""
//    Size: ""
//    Rating: ""
//    LogoLink: ""
//    NumberOfJd: ""
//    AccountType: ""
//    IsVerified: ""
//    IsInBlackList: ""
//}
