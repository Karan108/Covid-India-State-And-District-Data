import React from 'react';
import { FormControl, NativeSelect } from "@material-ui/core";
import "./StateSelector.css";
function StateSelector({ states, fun, placeHol }) {
    return (
        <div>
            <FormControl className="selector">
                <NativeSelect defaultValue='' onChange={fun}>
                    <option value="">Select {placeHol}</option>
                    {states.map((states, index) => <option key={index} value={states}>{states}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default StateSelector
