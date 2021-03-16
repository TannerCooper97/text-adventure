import axios from 'axios';
import React, {Component} from 'react';
import '../App.css';


class Footer extends Component {
    constructor() {
      super()
  
      this.state = {
        usernames: [],
        textInput: ''
      }
    }
  
    handleTextChange = value => {
      this.setState({
        textInput: value,
      })
    }
  
    handleNameUpdate = () => {
      axios
        .post('/api/user', { username: this.state.textInput })
        .then(res => this.setState({usernames: res.data}))
    }

    handleDeleteName = () => {
      axios.delete('/api/user', {username: this.state.username})
      .then(res => this.setState({usernames: res.data}))
    }
  
  
    render() {
      return (

        <div>
          <div className="Footer">
            <h3 id= "Subscribe-Message">Please Subscribe and Ring that Bell!</h3>
            <div id='Username'>
          <label>Your Name: </label>

          <input
            value={this.state.textInput}
            onChange={e => this.handleTextChange(e.target.value)}
          />
          
          <button onClick={this.handleNameUpdate}>PUNCH THAT SUBSCRIBE BUTTON</button>
          <button onClick={this.handleDeleteName}>Delete</button>

          {this.state.usernames.map((username, i) => {return <p key= {i}>{username}</p>})}
          </div>
          </div>
        </div>
      )
    }
  }

  export default Footer;