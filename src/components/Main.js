import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../actions/posts';
import Item from '../components/Item';
import Display from './Display'
import FilteredList from './FilteredList';

import { Route } from "react-router-dom";


const Main = props => {

    useEffect(() => {
        props.fetchData();
    }, [])

    let { data } = props.posts.items;
    let { nonChangedData } = props.posts.items;

    const [filteredList, setFilteredList] = useState([]);
    const [obtainFilter, setObtainFilter] = useState([]);

    const likedImageHandler = (i) => {
        if (!filteredList.includes(data[i])) {
            setFilteredList([...filteredList, data[i]])
        }
    }

    const filterItems = () => {
        //obtain index for recollection into data
        for(let i = 0; i<filteredList.length; i++){
            setObtainFilter([...data, filteredList[i]])
        }
        for(let i = data.length - 1; i >=0 ; i--){
            if(!filteredList.includes(data[i])){
                data.splice(i,1)
                // i = 0;
            }
        }        
    }

    const resetItems = () => {        
        //reset of liked items
        setFilteredList([]);
        
        //call redux store again to retrieve data.
        props.fetchData();
    }


    return (
        <div className="container">
            <div>
                <label>Click an image for a closer look.</label>
            </div>
            <div className="row">
                {
                    data ?
                        data.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    iterator={i}
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                    name={item.name}
                                    sku={item.sku}
                                    likedImage={item.liked}
                                />
                            )
                        })
                        :
                        <label>Loading images...</label>
                }
            </div>
            <div>
                {
                    data ?
                        data.map((item, i) => {
                            return (
                                <Route key={i} path={`/${item.name}`}
                                    component={() =>
                                        <Display
                                            key={i}
                                            iterator={i}
                                            image={item.image}
                                            description={item.description}
                                            price={item.price}
                                            name={item.name}
                                            sku={item.sku}
                                            likedImageHandler={likedImageHandler}
                                        />}
                                />
                            )
                        })
                        :
                        <label>Loading images...</label>
                }
            </div>
            <div>
                <FilteredList
                    filteredList={filteredList}
                />
                <button onClick={filterItems}>Filter</button>
                <button onClick={resetItems}>Reset</button>

            </div>
        </div>
    )
}



const mapStateToProps = state => ({
    posts: state.posts
})
export default connect(mapStateToProps, { fetchData })(Main);