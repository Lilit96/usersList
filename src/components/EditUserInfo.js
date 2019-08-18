import React from 'react';
import { connect } from 'react-redux';
import { editUserInfo } from '../action/action';

class EditUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleSubmit = (event, user) => {
        event.preventDefault();
        if(Object.entries(this.state).length){
            for(let key in this.state){
                user[key] = this.state[key]
            }
            this.props.dispatch(editUserInfo(user))
            this.props.history.push("/users")
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { data, location } = this.props;
        let user = data[location.pathname.split("/")[2] - 1];

        return <div>
            <form onSubmit={(event) => this.handleSubmit(event, user)}>
                <div className="form-group">
                    <label htmlFor="id">Id:</label>
                    <input type="text" className="form-control" id="id" value={user.id} readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={this.handleChange} value={this.state.name || user.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="surName">Surename:</label>
                    <input type="text" className="form-control" id="surname" placeholder="Enter surname" onChange={this.handleChange} value={this.state.surname || user.surname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="mail" placeholder="Enter email" onChange={this.handleChange} value={this.state.mail || user.mail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Tell:</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={this.handleChange} value={this.state.phone || user.phone}/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" className="form-control" id="address" onChange={this.handleChange} value={this.state.address || user.address} placeholder="Enter address" />
                </div>
                <div className="form-group">
                    <label htmlFor="b-day">Date:</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter b-day" onChange={this.handleChange} value={this.state.date || user.date}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    }
}

const mapStateToProps = (state) => ({data: state})

export default connect(mapStateToProps)(EditUserInfo);