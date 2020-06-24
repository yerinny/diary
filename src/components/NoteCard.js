import React from 'react';
import '../styles/notecard.css';



const NoteCard = props => (
    <div className="note jumbotron">
        <div>{props.children}</div>
    </div>
);


export default NoteCard;