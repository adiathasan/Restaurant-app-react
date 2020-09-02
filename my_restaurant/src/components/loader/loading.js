import React from 'react'
import {Spinner} from 'reactstrap'

function Loading() {
    return (
        <div>
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
        </div>
    )
}

export default Loading
