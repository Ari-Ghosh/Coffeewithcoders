import React from "react";
import AllMaterials from "./AllMaterials/AllMaterial";
import SingleMaterials from "./SingleMaterial/SingleMaterial";

const Materials = () =>{
    return (
        <React.Fragment>
            <AllMaterials/>
            <SingleMaterials/>
        </React.Fragment>
    )

}

export default Materials;