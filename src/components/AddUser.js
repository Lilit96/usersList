import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../action/action';

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }    
    }

    handleSubmit = (event, id) => {
        event.preventDefault();
        if(Object.entries(this.state).length){
            this.props.dispatch(addUser(this.state, id))
            this.props.history.push("/users")
        }
    }

    handleChange = (e) => {  
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { data } = this.props;

        return <div>
            <form onSubmit={(event) => this.handleSubmit(event, data.length + 1)}>
                <div className="form-group">
                    <label htmlFor="id">Id:</label>
                    <input type="text" className="form-control" id="id" value={data.length + 1}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={this.handleChange} value={this.state.name || ''} />
                </div>
                <div className="form-group">
                    <label htmlFor="surName">Surename:</label>
                    <input type="text" className="form-control" id="surname" placeholder="Enter surname" onChange={this.handleChange} value={this.state.surname || ''} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email || ''} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Tell:</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={this.handleChange} value={this.state.phone || ''}/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" onChange={this.handleChange} value={this.state.address || ''}/>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter b-day" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    }
}

const mapStateToProps = (state) =>({data: state});

export default connect(mapStateToProps)(AddUser);