import React, { Component } from 'react'
import '../index.css'
import './RankList.css'
import RankItem from './RankItem'

class RankList extends Component {
  render () {
    return (
      <div className='RankList'>
        <ul>
          {this.props.confidant.ranks.map((rank) => {
            return (
              <li key={rank.rank}>
                <RankItem rank={rank} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default RankList
