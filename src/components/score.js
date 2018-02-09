import React from 'react';

const Score = ({ good, bad }) => (
    <div className="score">
        <span className="good">{good}<i className="fa fa-fire" /></span>
        <span className="separator" />
        <span className="bad"><img className="tomb" src="public/images/tomb.png"/>{bad}</span>
    </div>
);

export default Score;