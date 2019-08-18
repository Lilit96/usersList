import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserInfo extends React.Component {

    back = () => {
        this.props.history.push('/users')
    }

    render() {
        const { data, location } = this.props;

        return <div className="container">
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr >
                    <th>Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>E-mail</th>
                    <th>Tell</th>
                    <th>Address</th>
                    <th>Date</th>
                </tr>
            </thead>  
            <tbody>
            {
             data.map((item,index)=>{
                return item.id == location.pathname.split("/")[2] && (      
                    <tr key={index} >
                        <td>
                            {item.id}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.surname}
                        </td>
                        <td>
                            {item.mail}
                        </td>
                        <td>
                            {item.phone}
                        </td>
                        <td>
                            {item.address}
                        </td> 
                        <td>
                            {item.date}
                        </td>
                    </tr>                       
                )
             }) 
            }
            </tbody>
        </table> 
        <div className="row">
            <button  className="btn btn-secondary btn-lg col-sm-2" onClick={() => this.back()}>Back</button>
        </div>
    </div>
    }
}

const mapStateToProps = (state) =>({data: state});

export default withRouter(connect(mapStateToProps)(UserInfo));