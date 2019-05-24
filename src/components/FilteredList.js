import React from 'react'

const FilteredList = props => {
    return (
        <div className="favoriteList">
            <div>
                <label className="bold-text">Favorited List</label>
            </div>
            <div>
                <ul>
                    {props.filteredList.map((item, i) => {
                        return <li key={i}> {item.name} </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FilteredList;
