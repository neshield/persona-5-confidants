import React, { Component } from 'react'
import '../index.css'
import Dropdown from 'react-dropdown'
// import confidantNames from '../data/confidant-names'
// import utils from '../utils'

// const labels = confidantNames.map((name) => {
//   return {
//     value: name,
//     label: utils.upFirstLetter(name)
//   }
// })

class ConfidantDropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      options: this.props.labels
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('Selected confidant: ' + option.label)
    this.props.parent.handleChange(option.value)
  }

  render () {
    return (
      <Dropdown options={this.state.options}
        onChange={this._onSelect}
        placeholder='Select a Confidant' />
    )
  }
}

export default ConfidantDropdown
