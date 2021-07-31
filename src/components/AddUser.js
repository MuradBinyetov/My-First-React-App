import React , {Component} from "react";

class AddUser extends Component{
    
    onChangeName(e){
       this.setState({ 
            [e.target.name] : e.target.value
       })
    } 

    onChangeEmail(e){
        this.setState({ 
            [e.target.name] : e.target.value
       })
    }

    onAddSubmit(e){
        
        const {addUser} = this.props;
        const {name,email} = this.state;

        const newUser = {
            id : Math.random(),
            name: name,
            email : email
        }

        addUser(newUser);    

        e.preventDefault();
    }

    state={
        name:"",
        email:""
    }
    
    
    render(){
        const {name,email} = this.state;
        return( 
            <div className="card">
                <h4 className="card-header">Add New User</h4>
                <div className="card-body">
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input onChange = {this.onChangeName.bind(this)} value={name} type="text" name="name" id="name" placeholder ="Enter your name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onChange = {this.onChangeName.bind(this)} value={email} type="text" name="email" id="email" placeholder ="Enter your email" className="form-control"/>
                        </div>

                        <button type="submit" className="btn btn-danger btn-block mt-2">
                            Add New User
                        </button>

                    </form>
                </div>
            </div>
        ) 
    }
}

export default AddUser;