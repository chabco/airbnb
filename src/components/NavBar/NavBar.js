import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import ModalSplash from './ModalSplash';
import Login from './Login';
import SignUp from './Signup';

class NavBar extends Component{

    state = {
        showModal: false,
        modalContent: <ModalSplash />
    }

    componentDidMount() {
        this.setState({
            modalContent: <ModalSplash changeModalContent={this.changeModalContent}/>
        })
    }

    changeModalContent = (newContent) => {
        let modalContent = <ModalSplash changeModalContent={this.changeModalContent}/>
        if(newContent === 'login'){
            modalContent = <Login changeModalContent={this.changeModalContent}/>
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

    render(){
        return(
            <div className="container-fluid nav">
                <div className="row">
                    <nav className="transparent">
                        <div className="nav-wrapper">
                            <Link to="/" className="left"><img className="logo" alt="" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/></Link>
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

export default NavBar;