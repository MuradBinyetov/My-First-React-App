import React , {Component} from "react";
import User from "./User";
class Users extends Component{
     
    render(){
        const {users , deleteUser} = this.props;
        return(
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                     {
                         users.map(user => {
                             const {id,name,email} =user;
                            
                             return(
                                 <User 
                                    key = {id}
                                    id= {id}
                                    name = {name}
                                    email = {email}
                                    deleteUser = {deleteUser}
                                 />
                             )

                         })
                     }
                </tbody>
            </table>        
        )
            
    }
}

export default Users;