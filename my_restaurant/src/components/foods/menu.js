import React, { Component } from 'react';
import Items from './items';
import { connect } from 'react-redux';
import { fetchDishesAction } from '../../actions/actions';
import Loading from '../loader/loading';



const Menu = (props) => {
    const { dishes } = props
    document.title = 'Menu'

    const mapDishToUi = dishes && dishes.map(dish => {
    return <Items dish={dish} key={dish.id} />
    })

    return mapDishToUi ? (
        <div className='container mb-5 pt-4'>
            <div className="row">
                {
                    mapDishToUi && mapDishToUi
                }
            </div>
        </div>
    ) : <Loading/>
}
    

        

const mapStateToProps = state =>{
    return {
        dishes: state.dishes.dishes,
        isLoading: state.dishes.isLoading
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchDishesFunc: ()=> dispatch(fetchDishesAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);