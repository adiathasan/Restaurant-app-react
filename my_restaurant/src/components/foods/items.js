import React from 'react'
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from '../loader/loading';

function Items({dish}) {
    
    const url = '/menu/' +dish.id
    return dish && (
        <div className="col-md-6 col-12 m-auto">
            <Link to={url} >
                <Card className=' shadow-sm cursor my-2 my-md-4'>
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
    ) 
}

export default Items
