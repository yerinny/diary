import React from 'react';
import '../styles/notecard.css';


// props.children passed down as a children which is shown <NoteCard> *what is between this* </NoteCard>
const NoteCard = props => (
    <div className="jumbotron">
        <div>{props.children}</div>
    </div>
);


export default NoteCard;