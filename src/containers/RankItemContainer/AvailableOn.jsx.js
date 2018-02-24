import React, { Component } from 'react'

export default class AvailableOn extends Component {
  render() {
    const {available} = this.props

    return (
      <div className="rankAvailable">
      {available ? (
        <span className='Available'><strong>Available On:</strong> {available}<br /></span>
      ) : null}
      </div>
    )
  }
}