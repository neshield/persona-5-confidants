import React, { Component } from 'react'
import '../index.css'
import './RankItem.css'

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

  renderUnlocks (unlocks) {
    return (
      <div>
        {unlocks ? (
          <div className='unlocks'>
            <span><strong>Unlocks</strong></span>
            <ul>
              {unlocks.ability ? (
                <li>
                  <span><strong>Ability: {unlocks.ability.name}</strong>: {unlocks.ability.description}</span>
                </li>
                ) : null}
              {unlocks.location ? (
                <li>
                  <span><strong>Location: {unlocks.location}</strong></span>
                </li>
                ) : null}
              {unlocks.fusion ? (
                <li>
                  <span><strong>Fusion: {unlocks.fusion}</strong></span>
                </li>
                ) : null}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }

  render () {
    // TODO: style text for abilities
    const requires = this.props.rank.requires
    const choices = this.props.rank.choices
    const available = this.props.rank.available
    const unlocks = this.props.rank.unlocks
    let text = this.props.rank.text
    let impactfulChoicesRegex = new RegExp('Impactful Conversation Choices for this Rank:', 'ig')

    text = text.replace(impactfulChoicesRegex, '')

    return (
      <div className='RankItem'>
        <span><strong>Rank {this.props.rank.rank}</strong><br /></span>
        {available ? (
          <span className='Available'><strong>Available On:</strong> {available}<br /></span>
        ) : null}
        {requires ? (
          <span className='Available'><strong>Requires:</strong> Rank {requires.rank} {requires.stat}<br /></span>
          ) : null}
        {text ? (
          <span>{text}<br /></span>
        ) : null}
        {this.renderChoices(choices)}
        {this.renderUnlocks(unlocks)}
      </div>
    )
  }
}

export default RankItem
