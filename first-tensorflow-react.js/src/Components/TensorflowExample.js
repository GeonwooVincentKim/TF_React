import React, {useState} from 'react';
import update from 'immutability-helper';

import './TensorflowExample.css';

const TensorflowExample = () => {
    // Value pairs state
    const [valuePairsState, setValuePairsState] = useState([
        {x: -1, y: -3},
    ])
    return (
        <div className="tensorflow-example">

        </div>
    );
}

export default TensorflowExample;