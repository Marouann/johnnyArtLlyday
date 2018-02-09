import React from 'react';
import Tomb from './tomb.js';
import Fire from './Fire.js';

const Score = ({ good, bad }) => (
    <div className="score">
        <span className="good">{good}<Fire /></span>
        <span className="separator" />
        <span className="bad"><Tomb />{bad}</span>
    </div>
);

export default Score;