import React from 'react'
import Door from './Door'
import Pillar from './Pillar'

const Room = () => {
    const roomStyle = {
        backgroundColor: "yellow",
        height: "300px",
        paddingTop: "20px",
        textAlign: "center",
        margin: "0% 5% -19% 5%"
    }
    
    return (
        <div className = "room">
            <h3 style = {roomStyle}>Room</h3>
            <Pillar/>
            <Door/>
        </div>
    )
}
export default Room
