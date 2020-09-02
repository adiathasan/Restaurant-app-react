import React from 'react'
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from '../loader/loading';

function Items({dish}) {
    const url = '/menu/' + dish.id
    return dish ? (
        <div className="col-6 m-auto">
            <Link to={url} >
                <Card className=' shadow-sm cursor my-4'>
                    <CardBody>
                        <CardImg src={dish.image} />
                        <CardImgOverlay>
                            <CardTitle className='text-light'>
                                {dish.category}
                            </CardTitle>
                        </CardImgOverlay>
                    </CardBody>
                </Card>
            </Link>
            
        </div>
    ) : <div className="col-8 p-5 text-center mx-auto my-5">
            <Loading />
        </div>
}

export default Items
