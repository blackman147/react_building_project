import React from 'react'

const land = () => {
    const landStyle = {
        backgroundColor: "green",
        height: "20px",
        paddingTop: "20px",
        textAlign: "center",
        margingTop: "1px"
    };

    return (
        <div className = "land">
            <footer><h3 style ={landStyle}>land</h3></footer>
        </div>
    )
}
export default land;