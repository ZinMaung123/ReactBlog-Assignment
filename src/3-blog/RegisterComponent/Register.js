import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            pass : "",
            confirmPass : ""
        };
    }

    detectNameChange = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    detectPassChange = (e) => {
        this.setState({
            pass : e.target.value
        });
    }
    
    detectConfirmChange = (e) => {
        this.setState({
            confirmPass : e.target.value
        });
    }

    storeUser = (e) => {
        if(this.state.pass === this.state.confirmPass){
            const id = this.createAcc(this.state.name, this.state.pass);
            this.props.loginEvent(id);
            return true;
        }
        else{
            return false;
        }
    }

    createAcc = (name, pass) => {
        const accounts = localStorage.getItem("user_accounts");
        let new_user = [];
        let acc_array = [];
        if(accounts != null){
            acc_array = JSON.parse(accounts);
        }
        const id = acc_array.length + 1;
        new_user.push(id);
        new_user.push(name);
        new_user.push(pass);

        acc_array.push(new_user);

        localStorage.setItem("user_accounts", JSON.stringify(acc_array));
        
        return id;
    }

    render(){
        return (
            <div>
                <form action="/articles" onSubmit={this.storeUser}>
                    <label htmlFor="username">UserName : </label>
                    <input type='text' id="username" value={this.props.name} onChange={this.detectNameChange} /><br/>

                    <label htmlFor="password">Password : </label>
                    <input type="password" id="password" value={this.props.pass} onChange={this.detectPassChange} /><br/>

                    <label htmlFor="confirm_password">Confirm Password : </label>
                    <input type="password" id="confirm_password" value={this.props.confirmPass} onChange={this.detectConfirmChange} /><br/>

                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

// class User{
//     constructor(name, pass){
//         this.name = name;
//         this.pass = pass;
//     }
// }

export default Register;