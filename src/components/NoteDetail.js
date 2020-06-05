import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from './Comment';


class NoteDetail extends Component {
    render(){

        const { note } = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>{note.title}</h1>
                        <p>{note.body}</p>
                        <Comment />
                        <Link to="/">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        //getting current notes id
        note: state.notes[ownProps.match.params.id], 
        uid: state.user.id
    }
}

export default connect(mapStateToProps)(NoteDetail);