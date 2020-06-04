import React, { Component } from "react"
import BookGrid from '../Organisms/BookGrid'
import axios from 'axios'


class Books extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/veronicanerak/json-db-data/books')
    .then(response => this.setState({
      books: response.data
    }))
  }

  render() {

    const { books } = this.state // destructuracion de objetos

    return <BookGrid books={ books } />
  }
    
}

export default Books