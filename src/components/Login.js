import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin, twitterLogin, facebookLogin } from "../actions/userAction";
import { Link } from 'react-router-dom';
import '../styles/login.css';

//login page

class Login extends Component {
    componentWillMount() {
        if (this.props.user !== null) {
            // console.log(this.props.history);
            this.props.history.push("/");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== null) {
            nextProps.history.push("/");
        }
    }

    render() {
        return (
            <div className="container bg">
                <div class="card">
                    <div class="card-header">Sign in with your favorite Social Media to start writing
                    </div>
                        <div class="card-body">
                                <button
                                    className="btn btn-danger col-sm-10 social"
                                    onClick={this.props.googleLogin}
                                >
                                    Login with Google
                                </button>

                                <button 
                                    className="btn btn-info col-sm-10 social" 
                                    onClick={this.props.twitterLogin}
                                >
                                    Login with Twitter
                                </button>

                                <button 
                                    className="btn btn-primary col-sm-10 social" 
                                    onClick={this.props.facebookLogin}
                                >
                                    Login with Facebook
                                </button>
                        </div>
                        <div className="card-footer">
                            <div>
                                ThinkCreative is a page where you can post your creative mind and get insight of other people's opinion to either contribute, suggest, or add-on
                            </div>
                            <br />
                            <div>
                                There is no sign-up, simply login with your exisiting account like Google, Twitter, or Facebook! Simple as just a click.
                            </div>
                        </div>
                        <br/>
                        <Link to="/faq">FAQ</Link>
                        
                </div>
            </div>
        )
    }
}   

function mapStateToProps(state, onwProps) {
    return {
        user: state.user
    };
}

export default connect(
    mapStateToProps,
    { googleLogin, twitterLogin, facebookLogin }
)(Login);