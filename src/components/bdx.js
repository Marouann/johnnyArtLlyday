import React from 'react';
import Score from './score';

const Bdx = ({ name, bdx }) => (
    <div className="bdx">
        <div className="bandeblanche little" />
        <h2>{name}</h2>
        <div className="row">
            {bdx.map(({ src, good, bad }, index) => (
                <div className="col-md-3 debile mx-auto">
                    <center>
                        <img className={"logo-bdx imgdeb"+index} src={src} />
                        <Score good={good} bad={bad} />
                    </center>
                </div>
            ))}
        </div>
    </div>
);

export default Bdx;