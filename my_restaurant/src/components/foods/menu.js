import React, { Component } from 'react';
import Items from './items';
import { connect } from 'react-redux';
import { fetchDishesAction } from '../../actions/actions';
import Loading from '../loader/loading';



class Menu extends Component {
    componentDidMount(){
        this.props.fetchDishesFunc()
    }
    render(){
        const dishes = this.props.dishes
        const UiMenu = dishes.map(dish => {
            return <Items dish={dish} key={dish.id} />
        })
        document.title = 'Menu'
        return !this.props.isLoading ? (
            <div className='container mb-5 pt-4'>
                <div className="row">
                    {
                        UiMenu
                    }
                </div>
            </div>
        ) : <Loading/>
    }
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