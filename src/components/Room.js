import React from 'react'
import Pillar from './Pillar'

const Room = () => {
    
    return (
        <div className = "room">
            Room{Pillar}
            <div className = " room_pillar_container">
                <Pillar/>
                <Pillar/>
                <Pillar/>
                <Pillar/>
            </div>
        </div>
    )
}
export default Room
