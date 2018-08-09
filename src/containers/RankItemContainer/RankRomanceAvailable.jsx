import React, { Component } from 'react'

export default class RankRomanceAvailable extends Component {
  render () {
    const {romance} = this.props

    if (romance) {
      const romanceStr = String.format('A romance with {0} becomes available at this rank.', (romance))
      return (
        <div className='romance'>
          <span>{romanceStr}</span>
        </div>
      )
    } else {
      return null
    }
  }
}
