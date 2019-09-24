import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import ModalSplash from './ModalSplash';
import Login from './Login';
import SignUp from './Signup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logoutAction from '../../actions/logoutAction'

class NavBar extends Component{

    state = {
        showModal: false,
        modalContent: <ModalSplash />,
    }

    componentDidMount() {
        this.setState({
            modalContent: <ModalSplash changeModalContent={this.changeModalContent}/>
        })
    }

    changeModalContent = (newContent) => {
        let modalContent = <ModalSplash changeModalContent={this.changeModalContent}/>
        if(newContent === 'login'){
            modalContent = <Login changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
        } else if (newContent === 'signup'){
            modalContent = <SignUp changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
        }
        this.setState({
            modalContent
        })
    }

    signup = (e)=>{
        document.querySelector('body').className = 'body-modal-show';
        this.setState({
            showModal: SVGComponentTransferFunctionElement,
        })
    }
    closeModal = (e)=>{
        document.querySelector('body').className = '';
        this.setState({
            showModal: false
        })
    }

    buildNavLinks = () => {
        let navLinks = "";
        if (!this.props.auth.token){
            // user is not logged in, give them standard nav
        navLinks =
            <ul id="nav-mobile" className="right">
                <li><Link to="/host/homes">Host a Home</Link></li>
                <li><Link to="/host/experience">Host an experience</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li onClick={this.signup}>
                    <Link to="?">Sign Up</Link>
                </li>
                <li onClick={this.signup}>
                    <Link to="?">Log in</Link>
                </li>
            </ul>
    } else {
        // user is logged in, give them logged in nav
        navLinks =
        <ul id="nav-mobile" className="right">
            <li><Link to="/host/homes">Host a Home</Link></li>
            <li><Link to="/host/experience">Host an experience</Link></li>
            <li><Link to="/saved">Saved</Link></li>
            <li onClick={this.props.logout}><Link to="/">Logout</Link></li>
            <li><Link to="/account">Welcome, {this.props.auth.first}!</Link></li>
        </ul>
    }
            return navLinks;
    }

    render(){
        console.log(this.state.auth)
        const navLinks = this.buildNavLinks();
        return(
            <div className="container-fluid nav">
                <div className="row">
                    <nav className="transparent">
                        <div className="nav-wrapper">
                            <Link to="/" className="left"><img className="logo" alt="" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/></Link>
                            {navLinks}
                        </div>
                    </nav>
                </div>

                <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
                    <button id="close-modal" onClick={this.closeModal}>&Chi;</button>
                    <div className="modal-content">
                        {this.state.modalContent}
                    </div>
                </div>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        logout: logoutAction
    },dispatch)
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

// export default NavBar;
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);