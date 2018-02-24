import React, { Component } from 'react'
import '../../index.css'
import './RankList.css'
import RankItemContainer from '../RankItemContainer'

class RankList extends Component {
  render () {
    const {confidant} = this.props
    return (
      <div className='RankList'>
        <ul>
          {confidant.ranks.map((rank) => {
            return (
              <li key={confidant.name + rank.rank}>
                <RankItemContainer rank={rank} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default RankList
