import React from "react";
import './AllMaterial.css'
import Card from '../../UI/Card'
import Material from "./Material";
import './AllMaterial.css'

const AllMaterials = () => {
    return (
        <Card className="AllMaterials">
            <h2 className="Title">Materials</h2>
            <div className="MaterialList">
                <Material className="activeAssignment" />
                <Material />
                <Material />
                <Material />
                <Material />
                <Material />
            </div>
        </Card>
    );
}

export default AllMaterials;