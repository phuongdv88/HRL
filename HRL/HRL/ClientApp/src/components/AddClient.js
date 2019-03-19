import React, { Component } from 'react';
export class AddClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            loading: true,
            clientData: ''
        };

        var clientId = this.props.match.params.id;
        // this will set sate for Edit client
        if (clientId > 0) {
            fetch('api/client/' + clientId)
                .then(data => data.json()).then(datajson => {
                    this.setState({ title: "Edit", loading: false, clientData: datajson });
                });
        } else {
            this.state = { title: "Create", loading: false, clientData: '' };
        }

        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.renderCreateForm = this.renderCreateForm.bind(this);
    }

    handleSave(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        if (this.state.clientData.clientId) {
            // update
            fetch('api/client', {
                method: 'PUT',
                body: data,
            }).then(rs => rs.json()).then(rsjson => { this.props.history.push('/fetch-client-data') });
        }
        else {
            //Post request for add client
            fetch('api/client', { method: 'POST', body: data, }).then(rs => rs.json()).then(rsjson => { this.props.history.push('/fetch-client-data'); });
        }

    }
    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetch-client-data");

    }
    render() {
        let contents = this.state.loading ? <p><em>Loading... </em></p> : this.renderCreateForm();
        return (
            <div><h1>{this.state.title}</h1>
                <h3> Client</h3>
                <hr />
                {contents}
            </div>
        );
    }

    renderCreateForm() {
        return (
            <div style={{ marginTop: 10 }}>
                <form onSubmit={this.handleSave} >
                    <div class="form-group">
                        <input class="form-control text-box single-line" id="ClientId" name="ClientId" type="text" defaultValue={this.state.clientData.clientId} hidden />
                        <label class="control-label col-md-2" >PacketType</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="PacketType" name="PacketType" type="text" defaultValue={this.state.clientData.packetType} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >Amount</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" data-val="true" data-val-number="The field Amount must be a number." id="Amount" name="Amount" type="number" defaultValue={this.state.clientData.amount} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >Email</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="Email" name="Email" type="text" defaultValue={this.state.clientData.email} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >PhoneNumber</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="PhoneNumber" name="PhoneNumber" type="text" defaultValue={this.state.clientData.phoneNumber} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >Address</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="Address" name="Address" type="text" defaultValue={this.state.clientData.address} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >Name</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="Name" name="Name" type="text" defaultValue={this.state.clientData.name} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >Website</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="Website" name="Website" type="text" defaultValue={this.state.clientData.website} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >GeneralInfo</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="GeneralInfo" name="GeneralInfo" type="text" defaultValue={this.state.clientData.generalInfo} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >AboutMe</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="AboutMe" name="AboutMe" type="text" defaultValue={this.state.clientData.aboutMe} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >OfficePhoneNumber</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="OfficePhoneNumber" name="OfficePhoneNumber" type="text" defaultValue={this.state.clientData.officePhoneNumber} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >Country</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="Country" name="Country" type="text" defaultValue={this.state.clientData.country} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" >Size</label>
                        <div class="col-md-10">
                            <input class="form-control text-box single-line" id="Size" name="Size" type="text" defaultValue={this.state.clientData.size} />
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-offset-2 col-md-10">
                            <button type="submit" class="btn btn-default">Save</button>
                            <button className="btn" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default AddClient;