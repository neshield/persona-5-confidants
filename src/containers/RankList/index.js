import React, { Component } from 'react'
import '../../index.css'
import './RankList.css'
import RankItemContainer from '../RankItemContainer'
import {Divider} from 'semantic-ui-react'

class RankList extends Component {
  render () {
    const {confidant} = this.props
    return (
      <div className='RankList'>
        <ul className='noBullet'>
          {confidant.ranks.map((rank) => {
            return (
              <li key={confidant.name + rank.rank} >
                <RankItemContainer rank={rank} />
                <Divider section />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default RankList
