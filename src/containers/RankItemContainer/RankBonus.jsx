import React, { Component } from 'react'

export default class RankBonus extends Component {
  render() {
    const {bonus} = this.props
    return (
      <div>
        {bonus ? (
          <div className='rankBonus'>
            <span><strong>Bonus: </strong>{bonus.stat} +{bonus.amount}</span>
          </div>
        ) : null}
      </div>
    )
  }
}
