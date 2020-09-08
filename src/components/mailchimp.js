import addToMailchimp from 'gatsby-plugin-mailchimp'
import React from 'react'

export default class MyGatsbyComponent extends React.Component {
  
    state = {
        email: "",
        submitted: false,
        success: false,
      }

    handleInputChange = event => {
       const target = event.target
       const value = target.value
       const name = target.name
       this.setState({
         [name]: value,
       })
    }
    
  _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    if (result.result === "success") {
        this.setState({email: "", submitted: true, success: true})
    }
    
    return    
}

  render () {
    
      return !this.state.submitted ? (<form onSubmit={this._handleSubmit}>
        <label>
          Enter Your Email Address
          <br></br><br></br>
          <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          style= {{border:"1px solid black"}}
          />
        </label>
        <br></br><br></br>
        <button type="submit">Submit</button>
      </form>) : (<div>You're almost set! I've sent you an email to confirm your subscription (because GDPR compliance).</div>)
  }
}