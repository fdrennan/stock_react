import React, { Component } from 'react'
import './Form.css'

export class Form extends Component {
    constructor (props) {
        super(props);
        this.state = ({
            stock: '',
            from: '',
            to: ''
        })
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        console.log(name);
        console.log(value);
        this.setState({
        [name]: value
        })
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getStock(this.state)
    };

    render () {
        return(
            <div>
                <form onChange={this.handleChange}
                      onSubmit={this.handleSubmit}>
                    <label>STOCK</label>
                    <input name="stock" type="text"/>
                    <br/>
                    <label>FROM</label>
                    <input name="from" type="text"/>
                    <br/>
                    <label>TO</label>
                    <input name="to" type="text"/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default Form
