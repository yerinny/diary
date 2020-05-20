import React, { Component } from 'react';
import {database} from '../firebase';
import _ from 'lodash';
import {connect} from 'react-redux'
import {getNotes, saveNotes} from '../actions/notesActions';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        title: '',
        body: '',
        notes: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  //lifecycle
  componentDidMount(){
    database.on('value', snapshot => {
        this.setState({
          notes: snapshot.val()
        })
    });
  }

 // handle change
  handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })    
  }

// handle submit
  handleSubmit(e){
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    database.push(note);
    this.setState({
      title: '',
      body: ''
    })
  }

//render posts
  renderNotes(){
    return _.map(this.state.notes, (note, key) =>{
        return (
          <div key={key}>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
          </div>
        )
    });
  }

  render() {
    return (
      <div className="container-fluid">
          <div clasName="row">
              <div className="col-sm-6 col-sm-offset-3">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      onChange={this.handleChange}
                      value={this.state.title}
                      type="text" 
                      name="title" 
                      className="form-control no-border" 
                      placeholder="Title.." 
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
                      placeholder="Body.." 
                      required 
                      /> 
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary col-sm-12">Save</button>
                  </div>
                </form>
                {this.renderNotes()}
              </div>
          </div>
      </div>
    )
  }
}

mapStateToProps(state, ownProps){
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps, {getNotes, saveNotes})(App);