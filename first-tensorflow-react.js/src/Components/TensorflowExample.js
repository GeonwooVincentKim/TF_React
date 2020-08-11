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
            <div className="train-controls">
                <h2 className="section">Training Data (x, y) pairs</h2>
                <div className="row labels">
                    <div className="field-label column">X</div>
                    <div className="field-label column">Y</div>
                </div>
                {/* Rendering a field input and output. */}
                {valuePairsState.map((val, index) => {
                    return (
                        <div key={index} className="row">
                            {/* This is input. */}
                            <input
                                className="field field-x column"
                                value={val.x}
                                name="x"
                                data-index={index}
                                onChange={HandleValuePairChange}
                                type="number" pattern="[0-9]*"
                            />
                            {/* This is output. */}
                            <input
                                className="field field-y column"
                                value={val.y}
                                name="y"
                                data-index={index}
                                onChange={HandleValuePairChange}
                                type="number" pattern="[0-9]*"
                            />
                        </div>
                    );
                })};

                {/* Create button that adds new items. */}
                <button
                    className="button-add-example button --green"
                    onClick={handleAddItem}>
                    +
                </button>

                {/* Training the model are alreaddy connected to their respective handlers. */}
                <button
                    className="button-train-example button --green"
                    onClick={handleAddItem}>
                    Train
                </button>
            </div>
        </div>
    );
}

export default TensorflowExample;