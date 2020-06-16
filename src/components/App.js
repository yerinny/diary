import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from '../actions/notesActions';
import NoteCard from './NoteCard';
import { getUser } from '../actions/userAction';
import { Link } from 'react-router-dom';
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        // state
        this.state = {
            title: '',
            body: ''
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNotes = this.renderNotes.bind(this);
    }

    // handle change
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // handle submit
    handleSubmit(e) {
        e.preventDefault();
        const note = {
            title: this.state.title,
            body: this.state.body,
            time: Date(),
            uid: this.props.user.uid
        };
        this.props.saveNote(note);
        this.setState({
            title: '',
            body: ''
        });
    }

    // render notes
    renderNotes() {
        //[{note1}, {note2}]
        console.log('here', this.props.notes)
        let notes = []

        let keys = Object.keys(this.props.notes)
        for (let i of keys) {
            console.log(typeof this.props.notes[i].time)
            let aNote = this.props.notes[i]
            aNote.key = i
            notes.push(aNote)
        }
        
        notes.map((note) => {

            note.jsTime = moment(note.time).toDate()

        })
        console.log(typeof notes[0].jsTime);
        console.log(notes[0].jsTime)
        notes.sort((a, b) => {

            if (a.jsTime < b.jsTime)
                return 1
            if (a.jsTime > b.jsTime)
                return -1
        })
        console.log(notes);
        return _.map(notes, (note) => {
            return (
                <NoteCard key={note.key}>
                    <Link to={`/${note.key}`}>
                        <h2>{note.title}</h2>
                    </Link>
                    <p>{note.body}</p>
                    {note.uid === this.props.user.uid && (
                        <div>
                            <button className="btn btn-delete btn-xs pull-right" onClick={() => this.props.deleteNote(note.key)}>
                                Delete
                            </button>
                            <button className="btn btn-update btn-xs pull-right">
                                <Link to={`/${note.key}/edit`}>Update</Link>
                            </button>
                        </div>
                    )}
                    <br />
                    <br />
                     <span className="pull-right">Created: {moment(note.time).format('MMMM Do YYYY, h:mm:ss a')}</span>
                </NoteCard>
            );
        });
    }

    render() {
        return (
            //User Profile
            <div className="container-fluid">
                <div className="row">
                    <div className="profile col-sm-2">
                        <img
                            src={this.props.user.photoURL}
                        />
                        <h4>Welcome back!</h4>
                        <h4>{this.props.user.displayName}</h4>
                        <h5>
                            TIP! Click on the title to post comments.
                        </h5>
                    </div>
                    <div className="col-sm-2 formInfo">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                    type="text"
                                    name="title"
                                    className="form-control no-border"
                                    placeholder="Title..."
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    onChange={this.handleChange}
                                    value={this.state.body}
                                    type="text"
                                    name="body"
                                    className="form-control no-border"
                                    placeholder="Post your thoughts here..."
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary col-sm-6 pull-right">Post</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-6" >
                        {this.renderNotes()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes,
        user: state.user
    };
}

export default connect(mapStateToProps, { getNotes, saveNote, deleteNote, getUser })(App);