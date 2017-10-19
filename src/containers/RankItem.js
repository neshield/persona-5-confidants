import React, { Component } from 'react'
import '../index.css'

class RankItem extends Component {
  renderChoice (choice) {
    return (
      <li>
        <span>{choice}</span>
      </li>
    )
  }

  renderChoices (choices) {
    return (
      <div>
        {choices ? (
          <div className='Choices'>
            <span><strong>Important conversation choices</strong></span>
            <ul>
              {choices.map((choice) => {
                return this.renderChoice(choice)
              })}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }

  render () {
    // TODO: style text for abilities
    let text = this.props.rank.text
    let mask = 'Impactful Conversation Choices for this Rank:'

    text = text.replace(new RegExp(mask, 'ig'), '')

    return (
      <div className='RankItem'>
        <span><strong>Rank {this.props.rank.rank}</strong><br />{text}</span>
        {this.renderChoices(this.props.rank.choices)}
      </div>
    )
  }
}

export default RankItem
