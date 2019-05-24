import React from 'react'

const FilteredList = props => {
    return (
        <div className="favoriteList">
            <label>Favorited List</label>
            <ul>
                {props.filteredList.map((item,i) => {
                    return <li key={i}> {item.name} </li>
                })}
            </ul>
        </div>
    )
}

export default FilteredList;
