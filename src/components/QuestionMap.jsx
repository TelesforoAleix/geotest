import React from "react";
import CataloniaMap from "./CataloniaMap";
import { ReactSVG } from "react-svg";



function QuestionMap() {


    return (
        <div className="question-test">
            <h2 className="question">Title</h2>
            <h4 className="hint">Hint</h4>
            <div className="map">
            <CataloniaMap />
            </div>

        </div>

    )
}

export default QuestionMap;