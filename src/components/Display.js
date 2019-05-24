import React, { useState } from 'react'
const Display = props => {


    return (
        <div className="container">
            <div className="row row-centered">
                <label >Click Image to like and filter your list!</label>
            </div>

            <div>
                <div>
                    <img src={props.image} onClick={()=>props.likedImageHandler(props.iterator)} />
                </div>
                <div>
                    <label>{props.name}!</label>
                </div>
                <div>
                    <label>{props.description}</label>
                </div>
                <div>
                    <label>${props.price}</label>
                </div>
            </div>

        </div>
    )
}

export default Display;
