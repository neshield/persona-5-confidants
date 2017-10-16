import React, { Component } from 'react'
import '../index.css'
import './RankList.css'

class RankList extends Component {
  render () {
    // TODO: style text for abilities
    // TODO: choices
    return (
      <div className='RankList'>
        <ul>
          {this.props.confidant.ranks.map((rank) => {
            return <li key={rank.rank}>
              <span><strong>Rank {rank.rank}</strong><br />{rank.text}</span>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default RankList
