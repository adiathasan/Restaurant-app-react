import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import Loading from '../loader/loading';

class DashBoard extends Component {
    render() {
        document.title = 'Yoshis>Resturant'
        return (
            <div className=''>

                    <Loading/>

            </div>
        );
    }
}


export default DashBoard;