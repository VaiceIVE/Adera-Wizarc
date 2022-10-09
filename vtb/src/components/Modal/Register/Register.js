import React from "react";
import '../../../css/style.css'

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            phone: "",
            password: "",
            lvl: 1,
            job: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if(event.target.id==="username")
        {
            this.setState({username: event.target.value});
        }
        if(event.target.id==="email")
        {
            this.setState({email: event.target.value});
        }
        if(event.target.id==="phone")
        {
            this.setState({phone: event.target.value});
        }
        if(event.target.id==="password")
        {
            this.setState({password: event.target.value});
        }
    }

    handleSubmit(event) {
        const requesOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Access-Control-Allow-Origin':  'http://localhost:3000/',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            body: JSON.stringify({user: this.state})
            };
        fetch('http://localhost:8000/api/user/signup', requesOptions)
        .then(resp => resp.json())
        .then(data => this.setState({postId: data.id}));
        console.log(this.state);
        event.preventDefault();
    }

    render(){       
        return (
            <>
                <form className="modal__form" onSubmit={this.handleSubmit}>
                    <input type="username"
                    placeholder="ФИО"
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}/>
                    <input
                    placeholder="Почта"
                    type="email"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required/>
                    <input
                    type="phone"
                    placeholder="Телефон"
                    id="phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}/>
                    <input
                    placeholder="Пароль"
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}/>
                    <button className="modal__btn" 
                    type="submit" 
                    ><span>Зарегестрироваться</span>
                    </button>
                </form>
            </>
        )
    }
    
}
