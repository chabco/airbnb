import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../../actions/loginAction';

class Login extends React.Component{
    state = {email: "", password: "", msg: ""}

    componentDidUpdate(prevProps, prevState){
        if(this.props.auth.msg !== prevProps.auth.msg){
            let msg = "";
            if(this.props.auth.msg === "badPass"){
                msg = "We do have a user with this password."
                // console.log("Hello")
            }else if(this.props.auth.msg === "loggedIn"){
                this.props.closeModal();
            }else if(this.props.auth.msg === "noEmail"){
                msg = "This email is not registered. Please enter a different email or register."
            }          
            this.setState({
                msg
            })
            
        } else {
            // don't care
    }
}

    changeEmail = (e)=>{this.setState({email: e.target.value})}
    changePass = (e)=>{this.setState({password: e.target.value})}

    submitLogin = (e) => {
        e.preventDefault();
        // validation for e-mail and pass can go here
        const formData = {...this.state}
        this.props.loginAction(formData)
    }

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect with Google</button>
                    <span>or</span>
                    <input onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email address" />
                    <input type="password" onChange={this.changePass} value={this.state.password}  className="password-signup" placeholder="Password" />
                    <button onSubmit={this.submitLogin} className="sign-up-button">Log In</button>
                    <div className="border-rule"></div>
                    <div className="login-text align-left">Don't have an account? <span onClick={()=>{this.props.changeModalContent('signup')}} >Sign Up</span></div>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state) {
    // we are mapping a piece of redux state to a prop (auth)
    return {
        auth: state.auth
    }
}


function mapDispatchToProps(dispatch) {
    // bindActionCreators = make our otherwise simple function an action creator
    return bindActionCreators({loginAction}, dispatch);
}


// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);