import React from 'react'
import { Link, Route } from 'react-router-dom';
import Display from './Display'
import Main from './Main'

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
