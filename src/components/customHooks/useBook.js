import {useState, useEffect} from 'react'
import axios from 'axios'


const useBook = id => {

    const [bookState, setBookState] = useState({ })

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/veronicanerak/json-db-data/books/${ id }`)
        .then(response => setBookState({
          books: response.data
        }))
    }, [])

    return bookState
}

export default useBook