import React, { Component } from 'react';
import './Popup.css';
import Popup from 'reactjs-popup';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',

            errors: {
                name: false,
                email: false,
            }
        }
        
    }

    handleOnChange = e => {
        const {target:{value, name}} = e;

        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = e => {
        const { name, email, phone, message } = this.state;

        this.setState({
            errors: {
                name: name.trim() === '',
                email: email.trim() === '',
            }
        })

        if(name.trim() && email.trim()) {
            const data = {
                name,
                email, 
                phone,
                message,
            }

            console.log("Data: ", data);
        }

        e.preventDefault();
    }

    render() {
        const {name, email, phone, message} = this.state;

        return (
            <div className="Forma">
                <form onSubmit = {this.handleOnSubmit}>
                    <h1>Contacto</h1>
                    <div>
                        <p>Nombre</p>
                        <input 
                            type="text"
                            name="name"
                            value = {name}
                            onChange = { this.handleOnChange }
                            className={this.state.errors.name ? 'error' : ''}
                        />
                        {
                            this.state.errors.name 
                            && 
                            <div className="errorMessage">Required</div>
                        }
                    </div>
                    <div>
                        <p>Email</p>
                        <input 
                            type="text"
                            name="email"
                            value = {email}
                            onChange = { this.handleOnChange }
                            className={this.state.errors.email ? 'error' : ''}
                        />
                        {
                            this.state.errors.email 
                            && 
                            <div className="errorMessage">Required</div>
                        }
                    </div>
                    <div>
                        <p>Telefono</p>
                        <input 
                            type="tel"
                            name="phone"
                            value = {phone}
                            onChange = { this.handleOnChange }
                        />
                    </div>
                    <div>
                        <p>Mensaje</p>
                        <input 
                            type="text"
                            name="message"
                            value = {message}
                            onChange = { this.handleOnChange }
                        />
                    </div>
                    <Popup 
                        trigger={<button className="button"> Enviar </button>}
                        modal
                        disabled = {!(name.trim() && email.trim())}
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header"><strong>Datos</strong></div>
                                <div className="content">
                                    <div><strong>Nombre: </strong>{name}</div>
                                    <div><strong>Email: </strong>{email}</div>
                                    {phone && <div><strong>Telefono: </strong>{phone}</div>}
                                    {message && <div><strong>Mensaje: </strong>{message}</div>}
                                </div>
                                <div className="actions">
                                    <button
                                        className="button"
                                        onClick={() => {
                                        close();
                                        }}
                                    >Aceptar</button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </form>
            </div>
        );
    }
}

export default Contact;