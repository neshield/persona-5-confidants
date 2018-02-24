import React, { Component } from 'react'

export default class RankMementosRequest extends Component {
  render() {
    const {mementosRequest} = this.props

    return (
      <div>
        {mementosRequest ? (
          <div>
            <span><strong>New Mementos Request: {mementosRequest.name}</strong></span>
          </div>
        ) : null}
      </div>
    )
  }
}
