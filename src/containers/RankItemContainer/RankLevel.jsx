import React, { Component } from 'react'

export default class RankLevel extends Component {
  render() {
    const {level} = this.props
    return (
      <div className="rankLevel">
        <span><strong>Rank {level}</strong><br /></span>
      </div>
      )
  }
}

