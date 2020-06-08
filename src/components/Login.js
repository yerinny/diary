import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin, twitterLogin, facebookLogin } from "../actions/userAction";
import { Link } from 'react-router-dom';
import '../styles/login.css';

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

            <div>
                <span className="brand">ThinkCreative</span>
            </div>
            <div className="row">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            < br />
                                <h3>Sign in with your favorite Social Media to start writing</h3>
                            < br />
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-sm-12 text-center">
                                        <button
                                            className="btn btn-danger col-sm-10 social"
                                            onClick={this.props.googleLogin}
                                        >
                                            Login with Google
                                        </button>
                                        <br />
                                        <br />
                                        <button 
                                            className="btn btn-info col-sm-10 social" 
                                            onClick={this.props.twitterLogin}
                                        >
                                            Login with Twitter
                                        </button>
                                        <br />
                                        <br />
                                        <button 
                                            className="btn btn-primary col-sm-10 social" 
                                            onClick={this.props.facebookLogin}
                                        >
                                            Login with Facebook
                                        </button>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <h6>
                                            ThinkCreative is a page where you can post your creative mind and get insight of other people's opinion to either contribute, suggest, or add-on.
                                        </h6>
                                        <h6>
                                            There is no sign-up, simply log-in with your existing account like Google, Twitter, or Facebook! Simple as just a click.
                                        </h6>
                                        <Link to="/FAQ"> FAQ </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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