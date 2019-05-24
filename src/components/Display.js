import React from 'react'

const Display = props => {
    return (
        <div className="container">
            <div className="label-center">
                <label >Click an image to add to your favorites, to filter down your search.</label>
            </div>

            <div>
                <div>
                    <img src={props.image} alt={props.name} onClick={()=>props.likedImageHandler(props.iterator)} />
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
