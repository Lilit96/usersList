import React from 'react';
import { connect } from 'react-redux';
import { delUser } from '../action/action';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


class UsersList extends React.Component{
    constructor(){
        super();
        this.state=({
        });
    }
    seeMore = (id) => {
        this.props.history.push('users/' + id)
    }

    editInfo = (id) => {
        this.props.history.push('users/' + id + '/edit')
    }

    addUser = () => {
        this.props.history.push('/add_user')
    }

    deleteUser = (id) => {
        this.props.dispatch(delUser(id))
    }
    
    render() {
        const { data } = this.props;

        return <div className="container">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>E-mail</th>
                    </tr>
                </thead>  
                <tbody>
                {
                 data.map((item,index)=>{
                    return (      
                        <tr key={index} >
                            <td>
                                {index + 1}
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
                            <td className="d-flex flex-row ">
                                <div className="more mr-3" onClick={()=>this.seeMore(item.id)}></div>
                                <div className="edit mr-3" onClick={()=>this.editInfo(item.id)}></div>
                                <div className="delete" onClick={()=>this.deleteUser(item.id)}></div>  
                            </td>
                        </tr>                       
                        )
                        }) 
                    }
                </tbody>
            </table> 
            <div className="row">
                <button  className="btn btn-secondary btn-lg col-sm-2" onClick={() => this.addUser()}>Add</button>
            </div>
        </div>
    }
}

const mapStateToProps = (state) =>({data: state});

export default withRouter(connect(mapStateToProps)(UsersList));