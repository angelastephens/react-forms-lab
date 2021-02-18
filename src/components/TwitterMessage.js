import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  remainingChars = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          onChange = {event => this.handleMessageChange(event)}
          value={this.state.message} 
          />
          {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
