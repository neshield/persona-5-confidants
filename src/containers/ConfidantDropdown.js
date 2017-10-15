import React, { Component } from 'react'
import '../index.css'
import Dropdown from 'react-dropdown'

class ConfidantDropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      options: props.names
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You selected: ' + option.label)
    this.props.parent.handleChange(option.label)
  }

  render () {
    return (
      <Dropdown options={this.state.options}
        onChange={this._onSelect}
        placeholder='Select a Confidant' />
    )
  }
}
        // onChange={() => this.props.onChange(this.option.label, this.state.parent)}

        // onChange={this.state.onChange}

export default ConfidantDropdown
