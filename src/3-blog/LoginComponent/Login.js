import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            pass : ""
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

    login = (e) => {
        e.preventDefault();
        const validUser = this.checkUser(this.state.name, this.state.pass);
		console.log("TCL: Login -> login -> validUser", validUser)
        if(validUser[0]){
            this.props.loginEvent(validUser[1]);
            return true;
        }
        else{
            return false;
        }
    }

    checkUser = (name, pass) => {
        let valid = [false, 0];
        const accounts = localStorage.getItem("user_accounts");
        if(accounts != null){
            let account_array = JSON.parse(accounts);
			console.log("TCL: Login -> checkUser -> account_array", account_array)
            for(const account of account_array){
                console.log(account);
                if(account[1] === name && account[2] === pass){
                    valid[0] = true;
                    valid[1] = account[0];
                    return valid;
                }
            }
            return valid;
        }
        else{
            return valid;
        }
    }


    render(){
        return (
            <div>
                <form onSubmit={this.login}>
                    <label htmlFor="username">UserName : </label>
                    <input type='text' id="username" value={this.props.name} onChange={this.detectNameChange} /><br/>

                    <label htmlFor="password">Password : </label>
                    <input type="password" id="password" value={this.props.pass} onChange={this.detectPassChange} /><br/>

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;