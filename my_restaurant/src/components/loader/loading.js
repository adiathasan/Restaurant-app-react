import React from 'react'
import {Spinner} from 'reactstrap'

function Loading() {
    return (
        <div className='pt-5 container d-flex  justify-content-center align-items-center align-center mt-5'>

            <i className="fas fa-atom fa-spin fa-5x  text-info mt-5 p-4"></i>

        </div>
    )
}

export default Loading
