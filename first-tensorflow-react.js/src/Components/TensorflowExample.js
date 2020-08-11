import React, {useState} from 'react';
import update from 'immutability-helper';

import './TensorflowExample.css';

const TensorflowExample = () => {
    // Value pairs state
    const [valuePairsState, setValuePairsState] = useState([
        {x: -1, y: -3},
        {x: 0., y: -1},
        {x: 1, y: 1},
        {x: 2, y: 3},
        {x: 3, y: 5},
        {x: 4, y: 7},
    ]);

    // Define the Model-State.
    const [modelState, setModelState] = useState({
        model: null,
        trained: false,
        predictedValue: "Click on train!",
        valueToPredict: 1,
    });

    // Event Handlers
    const HandleValuePairChange = (e) =>{
        const updatedValuePairs = update(valuePairsState, {
            [e.target.dataset.index]: {
                [e.target.name]: { $set: parseInt(e.target.value)}
            }
        });

        setValuePairsState(
            updatedValuePairs
        );
    };

    // Adding Image or other substance Items to handleAddItem.
    const handleAddItem = () => {
        setValuePairsState([
            ...valuePairsState,
            {x : 1, y: 1}
        ]);
    };
    
    // Change Model-Index by handling Model-Colums-Index that belongs to Model.
    const handleModelChnage = (e) => setModelState({
        ...modelState,
        [e.target.name]: [parseInt(e.target.value)],
    });

    const handleTrainModel = () => {

    }

    const handlePredict = () =>{
        
    }


    return (
        <div className="tensorflow-example">

        </div>
    );
}

export default TensorflowExample;