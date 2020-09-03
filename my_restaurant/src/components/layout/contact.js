import React, { Component } from 'react'
import { connect } from 'react-redux';
import contactAction from '../../actions/actions'

class Contact extends Component {
    state ={
        name:'',
        email:'',
        message:'',
        phone:'',
    }
    handleChange = e =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        this.props.contactFunc(this.state)
        this.message = (
            <div className="alert text-center alert-success">
                <p>Thank you for contacting us</p>
            </div>
        )
        setTimeout(()=>{
            this.props.history.push('/')
        }, 3000)
    }

    render() {
        document.title = 'Contact'
        return (
            <div>
                <div className='container my-4 mb-5'>
                    <h3 className='text-center border-bottom border-info text-dark mb-4 p-2'>Contact Us</h3>
                    <div className="row">
                        <div className="col-11  bg-info col-md-8 mx-auto p-3 text-light rounded shadow">
                            {
                                this.message && this.message
                            }
                            <form className='p-4 ' onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">
                                    Name</label>
                                    <input onChange={this.handleChange} type="text" className="form-control" id='name' required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={this.handleChange} type="email" className="form-control" id='email' required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea onChange={this.handleChange} type='text' className="form-control" id='message' required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input onChange={this.handleChange} type="text" className="form-control" id='phone' required />
                                </div>
                                <button className='btn btn-light'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        contactFunc: state => dispatch(contactAction(state))
    }
}

const mapStateToProps = state => {

    return {
        contact: state.contacts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
