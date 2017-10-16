import React, { Component } from 'react'
import '../index.css'

class RankItem extends Component {
  render () {
    // TODO: style text for abilities
    // TODO: choices
    return (
      <div className='RankItem'>
        <span><strong>Rank {this.props.rank.rank}</strong><br />{this.props.rank.text}</span>
      </div>
    )
  }
}

export default RankItem
