import React from "react";
import './SingleMaterial.css'
import Card from "../../UI/Card";

let n=0;
const SingleMaterials = () => {
    return (
        <Card className="SingleMaterials">
            <div className={`SelectedAssignment`}>
                <div className="SelectedAssignmentTitle">
                    <h2>{`Assignment ${n}`}</h2>
                </div>
                <div className="SelectedAssignmentStatus">
                    <div>{`Due Today`}</div>
                </div>  
            </div>
            <div className="SelectedAssignmentDescription">
                <p>An abstract is a 150- to 250-word paragraph that provides readers with a quick overview of your essay or report and its organization. It should express your thesis (or central idea) and your key points; it should also suggest any implications or applications of the research you discuss in the paper.</p>
            </div>
            <div className="AssignmentButtons">
                <button className="UploadButton">Upload</button>
                <button className="SubmitButton">Submit</button>
            </div>

        </Card>
    );

}

export default SingleMaterials;