import React, { Component } from 'react';
import Items from './items';
import { connect } from 'react-redux';


const Menu = ({ dishes }) => {
    const mapDishToUi = dishes.map(dish => {
        return <Items dish={dish} key={dish.id} />
    })
    return (
        <div className='container pt-4'>
            <div className="row">
                {
                    mapDishToUi && mapDishToUi
                }
            </div>
        </div>
    )

        
}

const mapStateToProps = state =>{
    return {
        dishes: state.dishes
    }
}


export default connect(mapStateToProps)(Menu);