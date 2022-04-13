import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      itemText: ''
    }
  }

  handleChanges = e => {
    this.setState({
      itemText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(e, this.state.itemText)
    this.setState({
      itemText: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='item'
          value={this.state.itemText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    )
  }
}
