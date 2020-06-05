import React, { Component } from 'react';
import { connect } from 'react-redux';
import {googleLogin, twitterLogin} from '../actions/userAction';

class Login extends Component {

    componentWillMount() {
        if (this.props.user !== null) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== null) {
            nextProps.history.push('/');
        }
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px;'}}>
                        <h1>
                            DIARY | { new Date().getFullYear() } Login with your favortie <b>Social Network</b> 
                        </h1>
                    </div>
                    <div className="col-sm-6 text-center">
                        <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>
                            Login with Google
                        </button>
                    </div>
                        <br/>
                    <div className="col-sm-6">
                        <button className="btn btn-success btn-lg" onClick={this.props.twitterLogin}>
                            Login with Twitter
                        </button>
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


export default connect(mapStateToProps, {googleLogin, twitterLogin})(Login);