import React from 'react'
import { connect } from 'react-redux'
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';
import moment from 'moment'
import { Redirect } from 'react-router-dom';

function ItemDetail(props) {
    const {dish} = props
    const comments = dish && dish.comments.map(comment => {
        return (
            <div className=' py-4 border-bottom border-info' key={comment.id}>
                <p>rating: {comment.rating}</p>
                <p>comment: {comment.comment}</p>
                <p>author: {comment.author}</p>
                <p>date: {moment(comment.date).calendar()}</p>
            </div>
        )
    })
    return dish ? (
        <div className="container-fluid">
            <div className="row">
                <div className='col-12 m-auto'>
                    <Card className=' container shadow-sm my-4'>
                        <CardBody className='row'>
                            <div className="col-5">
                                <CardImg src={dish.image} />
                                <CardImgOverlay>
                                    <CardTitle className='text-light'>
                                        <h5>{dish.category}</h5>
                                    </CardTitle>
                                </CardImgOverlay>
                            </div>
                           <div className="col-7 border-left ">
                                <p>name: {dish.name}</p>
                                <p>type: {dish.label}</p>
                                <p>price: $ {dish.price}</p>
                           </div>
                           <div className="col-12 mt-4 border-top pt-4">
                                <p>{dish.description}</p>
                           </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className='col-12 m-auto'>
                    <Card className=' container shadow-sm my-4'>
                        <CardBody className='row'>
                            <div className="col-2 py-4 bg-info">
                                <h4 className='text-light'>Ratings:</h4>
                            </div>
                            <div className="col-9 mr-auto">
                                {
                                    comments && comments
                                }
                                
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    ) : <Redirect to={'/page-not-found/404/'+props.match.params.id}/>
}

const mapStateToProps = (state, ownProps) =>{
    
    const id = ownProps.match.params.id
    const {dishes} = state
    const dish = dishes.filter(dish =>{
        return dish.id == id
    })
    return {
        dish: dish[0] 
    }
}

export default connect(mapStateToProps)(ItemDetail)
