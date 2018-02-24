import React, { Component } from 'react'
import '../../index.css'
import './ConfidantDropdown.css'
import Dropdown from 'react-dropdown'

export default class ConfidantDropdown extends Component {
  render () {
    const {labels, onSelect} = this.props

    return (
      <Dropdown className='ConfidantDropdown' options={labels}
        onChange={(option) => onSelect(option.value)}
        placeholder='Select a Confidant' />
    )
  }
}
