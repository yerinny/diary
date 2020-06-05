import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
    render(){
        return (
            <div>
                <form>
                    <div className="form-group">
                        <textarea
                            type="text"
                            name="commentBody"
                            className="form-control no-border"
                            placeholder="Write Comment..." 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Add Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps){
    return {
        uid: state.user.id
    }
}


export default connect(mapStateToProps, {})(Comment);