import React from "react";
import Card from "../../UI/Card";
import Module from "./Modules";
import './SingleCourse.css'

const obj = {
    'Oscillations':{
        'image':'https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2F2acaaf42-6821-48a6-8302-fe90bae1ab06_3x.png?alt=media&token=8354ebee-c484-4955-a006-c3be412db765',
        'videos':['https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lecture%201_%20Introduction%2C%20SHM%2C%20Restoring%20force%2C%20examples.mp4?alt=media&token=c0b46300-7517-40b3-8402-63325c997be9','https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lecture%202_%20Differential%20equation%20of%20SHM%2C%20Characteristics.mp4?alt=media&token=02602e34-d970-4b15-8162-a7d838bb49f2','https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lecture%203_%20velocity%20and%20acceleration%20in%20SHM.mp4?alt=media&token=c8d29398-bbe4-4a5b-a0cd-c7ea828525dd','https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lecture%204_%20Damped%20oscillation%2C%20introduction%2C%20definition%2C%20examples.mp4?alt=media&token=c3821980-caec-4e04-a34c-cc283121c731',
        'https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lecture%205_%20Damped%20oscillation%2C%20over%20damping%2C%20critical%20damping%2C%20low%20damping.mp4?alt=media&token=8c6bcbb2-a7d8-4d95-9e97-1860eb54a3a4','https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lecture%206_%20Time%20constant%2C%20Modulus%20of%20decay%2C%20Logarithmic%20decrement.mp4?alt=media&token=96a8b6c2-0ef1-40e3-8e67-cd8b4096004d','https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lecture%207_%20Forced%20vibration%2C%20differential%20equation%2C%20velocity.mp4?alt=media&token=74db3924-b364-44d1-b773-ec00437bf93c','https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lec%208_%20Resonance%2C%20Examples%2C%20Velocity%20and%20Amplitude%20resonance.mp4?alt=media&token=4a2abcb3-aaaa-469a-aecf-76cb0b29039e','https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lec%209_%20Power%20factor%2C%20Power.mp4?alt=media&token=b7b5bb2f-5459-4c78-ac34-bf35159109b8','https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lec%2010_%20Sharpness%20of%20Resonance%2C%20Band%20width.mp4?alt=media&token=37d1ed67-590b-4c0b-a2c7-d1327592addd','https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FOscillation%2FOscillation%20lec%2011_%20Summary.mp4?alt=media&token=8a16935a-5eb7-45a2-be05-400b701c11f8']
    },
    'DNA':{
        'Lec_1':'https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FDNA%2FDNA%20replication%201.mp4?alt=media&token=2f97f7ab-25c9-4927-8d4d-974d039b6562',
        'Lec_2':'https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FDNA%2FDNA%20replication%202.mp4?alt=media&token=09a1b0be-8502-4a71-9a76-4a672db68257',
        'Lec-3':'https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/Courses%2FDNA%2Ftranscription%20process.mp4?alt=media&token=112a4782-1682-4666-88a0-8fbfc3d48e02'
    }
}
const SingleCourse = () => {
    return (
        <Card className="SingleCourse">
            <div className="CourseImg"><img src={obj.Oscillations.image}/></div>
            <div className="CourseDetails">
                <p className="CourseDescription"> Oscillation is defined as the process of repeating variations of any quantity or measure about its equilibrium value in time. Oscillation can also be defined as a periodic variation of a matter between two values or about its central value.</p>
            </div>
            <div className="ModuleList" id="Oscillation">
                {obj.Oscillations.videos.map((ref,index)=>{
                return <Module name={`Lec ${index+1}`} link={ref}/>})}
            </div>
        </Card>
    )
}

export default SingleCourse;