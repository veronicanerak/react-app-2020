import React, { Component } from 'react'

const withLoader = (propsValue, WrappedComponent) => {
    return class WithLoader extends Component {
        constructor(props) {
            super(props)
        }

        render() {            
            return this.props[propsValue].length === 0 
            ? <h2 className="ed-grid">Loading ....</h2>
            : <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader