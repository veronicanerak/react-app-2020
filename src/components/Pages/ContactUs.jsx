import React, {Component} from "react"

class ContactUs extends Component {
 
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            customDate: new Date()
        }

        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    changeDate() {
        this.setState({
            customDate: new Date()
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Custom form {this.props.formName }</h1>
                <h4>Current Date is: { Math.ceil(this.state.customDate/1000) }</h4>
                <form id="form-element">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                onChange= { this.changeName }
                            />                        
                        </div>
                        <div className="form__item">
                            <label>Email</label>
                            <input 
                                type="email" 
                                onChange={ this.changeEmail }
                            />                        
                        </div>                    
                    </div>
                </form>
                <div>
                    <h2>{`Welcome: ${this.state.name}`}</h2>
                    <p>{`Your email is: ${this.state.email}`}</p>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let formElement =  document.getElementById("form-element")
        console.log(formElement)

        this.intervaloFecha = setInterval(() => {
            this.changeDate()
            console.log(new Date())
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevProps)
        //console.log(prevState)
        //console.log("-----------")
    }

    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }

}

export default ContactUs