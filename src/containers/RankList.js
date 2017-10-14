import React, { Component } from 'react'
import confidants from '../data/confidants'
import makoto from '../data/confidant-objects/Makoto'
import '../index.css'
import './RankList.css'

class RankList extends Component {
  render () {
    return (
      <div className='RankList'>
        <ul>
          {makoto.ranks.map((rank) => {
            return <li key={rank.rank}>
              <span><strong>Rank {rank.rank}</strong><br />{rank.text}</span>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

// class RankList extends Component {
//   render () {
//     return (
//       <div className='RankList'>
//         <ul>
//           <li>hey</li>
//         </ul>
//       </div>
//     )
//   }
// }

export default RankList
