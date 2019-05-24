import React from 'react'
import { Link } from 'react-router-dom';


const Item = (props) => {
    return (
        <div>
            <div>
                <div className="image-handler">
                    <Link to={`/${props.name}`}>
                        <img className="image-row" src={props.image} alt="autozone images" />
                    </Link>
                    <div>
                        <label>{props.name}</label>
                    </div>
                    <div>
                        <label>${props.price}</label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Item;
