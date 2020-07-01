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
            time: Date.now(),
            uid: this.props.user.uid
        };
        this.props.saveNote(note);
        this.setState({
            title: '',
            body: ''
        });
    }


    renderNotes() {
        return _.map(this.props.notes, (note, key) => {

            return (
                <NoteCard key={key}>
                    <Link className="title" to={`/${key}`}>
                        <h2>{note.title.substring(0,10)}</h2>
                    </Link>
                    <p>{note.body.substring(0,16)}</p>
                    {note.uid === this.props.user.uid && (
                        <div>
                            <button className="btn btn-danger btn-xs pull-right" onClick={() => this.props.deleteNote(key)}>
                                Delete
                            </button>
                            <button className="btn btn-info btn-xs pull-right">
                                <Link to={`/${key}/edit`}>Update</Link>
                            </button>
                            </div>
                            )}
                            <br/>
                            <br/>
                            <span className="pull-right">{moment(note.time).format('MMMM Do YYYY, h:mm:ss a')}</span>

                        
                </NoteCard>
            );
        });
    }

    render() {

        const date = new Date();
        const currentTime = date.getHours();

        let greeting;

        const customStyle = {
            color: ""
        }

        if (currentTime < 12) {
            greeting = "Good Morning!";
            customStyle.color = "yellow";
        } else if (currentTime < 18) {
            greeting = "Good Afternoon!";
            customStyle.color = "orange";
        } else {
            greeting = "Good Evening!";
            customStyle.color = "darkblue";
        }
        return (
            //User Profile
            <div className="container-fluid">
                <div className="row">
                    <div className="profile col-sm-2">
                        <img
                            src={this.props.user.photoURL}
                        />
                        <h4 style={customStyle}>{greeting}</h4>
                        <h4>{this.props.user.displayName}</h4>
                        <h5>
                            TIP ! Click on the title to post comments.
                        </h5>
                        <Link className="faqMain" to="/faq">FAQ</Link>
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
                                    placeholder="Post your ideas here..."
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