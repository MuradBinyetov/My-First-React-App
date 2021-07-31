import { react } from "@babel/types";
import { render } from "@testing-library/react";
import React,{Component} from "react";
import AddUser from "./components/AddUser"; 
import Users from "./components/Users";
 
class App extends Component{
 

  constructor(props){
    super(props);
    this.state = {
      users : [
        {
          id: 1,
          name:"Murad Binyetov",
          email:"murad@gmail.com"
        },
        {
          id: 2,
          name:"Ilham Binyetov",
          email:"ilham@gmail.com"
        },
        {
          id: 3,
          name:"Eli Binyetov",
          email:"eli@gmail.com"
        },
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser){
    let updatedUser = this.state.users;
    updatedUser.push(newUser);

    this.setState({
      users:updatedUser
    })
  }

  deleteUser(id){
    let updatedUser = this.state.users;

    updatedUser = updatedUser.filter(user => user.id !== id);
    this.setState({
      users:updatedUser
    })
  }


  render() {
    return (
     <div className="container">
       <h4>User App</h4>
       <hr/>
       <AddUser addUser ={this.addUser}/>
       <hr/>
       <Users deleteUser = {this.deleteUser} users ={this.state.users}/>
     </div>
  );
  }
} 

export default App;
