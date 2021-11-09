import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { request_id, needy_id, needy_name,exam_name,city_name,state_name} = this.state;
    await axios.post(
      'https://4pd78wqu9a.execute-api.us-east-2.amazonaws.com/PostCopy/postneedyrequest',
      { key1: `${request_id}, ${needy_id} ,${needy_name},${exam_name},${city_name},${state_name}` }, {mode:'cors'}
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>request_id:</label>
          <input
            type="text"
            name="request_id"
            onChange={this.handleChange}
            value={this.state.request_id}
          />

          <label>Needy_id:</label>
          <input
            type="text"
            name="needy_id"
            onChange={this.handleChange}
            value={this.state.needy_id}
          />
          <br/>
           <label>needy_name:</label>
          <input
            type="text"
            name="needy_name"
            onChange={this.handleChange}
            value={this.state.needy_name}
          />

          <label>exam_name:</label>
          <input
            type="text"
            name="exam_name"
            onChange={this.handleChange}
            value={this.state.exam_name}
          />

          <label>city_name:</label>
          <input
            type="text"
            name="city_name"
            onChange={this.handleChange}
            value={this.state.city_name}
          />

          <label>state_name:</label>
          <input
            type="text"
            name="state_name"
            onChange={this.handleChange}
            value={this.state.state_name}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
