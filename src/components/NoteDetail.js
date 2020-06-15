import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import _ from 'lodash';
import Commenting from '../components/Commenting';

//this is the commenting page

class NoteDetail extends Component {

    rendercomments() {
        const { note } = this.props;
        return _.map(note.comments, (comment, key) => {
            return <Commenting key={key} id={key}>{comment.commentBody}</Commenting>
        })
    }


    render(){
        const { note } = this.props;
        console.log(note);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>{note.title}</h1>
                        <p>{note.body}</p>
                        <Comment id={this.props.match.params.id} />
                        {this.rendercomments()}
                        <br />
                        <Link to="/"> &#171; Back</Link>
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