import React from 'react'
import { connect } from 'react-redux'
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';
import moment from 'moment'
import { Redirect } from 'react-router-dom';
import Loading from '../loader/loading';

function ItemDetail(props) {
    const {dish, isLoading} = props
    document.title = dish && dish.name
    const comments = dish && dish.comments.map(comment => {
        return (
            <div className=' py-4 pl-2 border-bottom shadow-sm border-info' key={comment.id}>
                <p>rating: <span className=' text-info'>{comment.rating}</span></p>
                <p><span className='text-danger'>comment </span>: {comment.comment}</p>
                <p>author: <span className=' text-info'>
                                {comment.author}
                            </span>
                </p>

                <p>date: {moment(comment.date).calendar()}</p>
            </div>
        )
    })
    return dish ? (
        <div className="container-fluid" id={'#'+ dish.id}>
            <div className="row">
                <div className='col-12 m-auto'>
                    <Card className=' container shadow-sm my-4'>
                        <CardBody className='row'>
                            <div className="col-md-5 col-12">
                                <CardImg src={dish.image} />
                                <CardImgOverlay>
                                    <CardTitle className='text-light'>
                                        <h5>{dish.category}</h5>
                                    </CardTitle>
                                </CardImgOverlay>
                            </div>
                            <div className="col-md-7 col-12 mt-2 shadow-sm  mt-md-0 border-left-md border-secondary ">
                                <p>Category: {dish.category}</p>
                                <p>name: {dish.name}</p>
                                <p>type: {dish.label}</p>
                                <p>price: $ {dish.price}</p>
                           </div>
                           <div className="col-12 mt-4 border-top border-info pt-4">
                                <p>{dish.description}</p>
                           </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row  mb-5 ">
                <div className='col-12 m-auto'>
                    <Card className=' container shadow-sm my-4'>
                        <CardBody className='row'>
                            <div className="col-2 ml-auto py-4 bg-info">
                                <h4 className='text-light px-2 '></h4>
                            </div>
                            <div className="col-10 mr-auto">
                                {
                                    comments && comments
                                }
                                
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    ) : <Redirect to={'/page-not-found/404/' + props.match.params.id} />
}


const mapStateToProps = (state, ownProps) =>{
    
    const id = ownProps.match.params.id
    const {dishes} = state.dishes
    const dish = dishes.filter(dish =>{
        return dish.id == id
    })
    return {
        dish: dish[0], 
        isLoading: state.dishes.isLoading
    }
}

export default connect(mapStateToProps)(ItemDetail)
