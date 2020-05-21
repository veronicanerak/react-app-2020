import React, { Component } from 'react'
import UserGrid from '../Organisms/UserGrid'
import axios from 'axios'

class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    /*
    // Peticiones a una API REST using fetch
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', { method: 'get'})
        .then(responseUsers => responseUsers.json())
        .then(responseJson => {
            this.setState({
                users: responseJson
            })
        })
    }
    */

    // Peticiones a una API REST using AXIOS
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users: response.data
            })
        })
    }
    
    render() {
        const { users } = this.state
        return <UserGrid users={ users } />
    }
}

export default Users