import React, { Component } from 'react'
import abilities from '../data/abilities.json'
import '../index.css'
import './RankItem.css'

class RankItem extends Component {
  // TODO: Add keys to li
  renderChoice (choiceObj) {
    return (
      <li>
        <span>{choiceObj.choice}</span>
        <ul>
          {choiceObj.options.map((opt) => {
            return (
              <li key={opt.dialogue}>{opt.dialogue} +{opt.points}</li>
            )
          })}
        </ul>
      </li>
    )
  }

  renderRomance (choiceObj) {
    return (
      <li>
        <span>{choiceObj.choice}</span>
        <ul>
          <li>Romance: {choiceObj.romance}</li>
          <li>Friendship: {choiceObj.friendship}</li>
        </ul>
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
              {choices.map((choiceObj) => {
                if (choiceObj.romance) {
                  return this.renderRomance(choiceObj)
                } else {
                  return this.renderChoice(choiceObj)
                }
              })}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }

  renderAfterMementos (choices) {
    return (
      <div>
        {choices ? (
          <div className='Choices'>
            <span><strong>Important conversation choices after Mementos Request</strong></span>
            <ul>
              {choices.map((choiceObj) => {
                if (choiceObj.romance) {
                  return this.renderRomance(choiceObj)
                } else {
                  return this.renderChoice(choiceObj)
                }
              })}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }

  renderMementosRequest (mementosRequest) {
    return (
      <div>
        {mementosRequest ? (
          <div>
            <span><strong>New Mementos Request: {mementosRequest.name}</strong></span>
          </div>
        ) : null}
      </div>
    )
  }

  renderAbility (ability) {
    if (ability && !ability.name) {
      const shadowTalkRegex = new RegExp('(shadowTalk):(.+)')
      const secondAwakeningRegex = new RegExp('(secondAwakening):(.+):(.+)')
      const shadowTalkMatch = shadowTalkRegex.exec(ability)
      const secondAwakeningMatch = secondAwakeningRegex.exec(ability)

      let name
      let description

      // Handle shadowTalk
      if (shadowTalkMatch) {
        ({name, description} = abilities[shadowTalkMatch[1]])
        name = String.format(name, shadowTalkMatch[2])
      } else if (secondAwakeningMatch) {
        ({name, description} = abilities[secondAwakeningMatch[1]])
        description = String.format(description, secondAwakeningMatch[2], secondAwakeningMatch[3])
      } else {
        ({name, description} = abilities[ability])
      }

      return (
        <li>
          <span><strong>Ability: {name}</strong>: {description}</span>
        </li>
      )
    } else if (ability && ability.name) {
      return (
        <li>
          <span><strong>Ability: {ability.name}</strong>: {ability.description}</span>
        </li>
      )
    } else {
      return null
    }
  }
  renderAbilities (abilities) {
    if (abilities) {
      return abilities.map((ability) => this.renderAbility(ability))
    }
  }

  renderSecondAwakening (secondAwakening) {
    const secondAwakeningTemplate = "Evolve {0}'s Persona to {1}."
    const secondAwakeningRegex = new RegExp('(.+):(.+)')
    const match = secondAwakeningRegex.exec(secondAwakening)

    if (match) {
      const description = String.format(secondAwakeningTemplate, match[1], match[2])
      return (
        <li>
          <span><strong>Second Awakening: {description}</strong></span>
        </li>
      )
    } else {
      return null
    }
  }

  renderUnlocks (unlocks) {
    return (
      <div>
        {unlocks ? (
          <div className='unlocks'>
            <span><strong>Unlocks</strong></span>
            <ul>
              {this.renderAbilities(unlocks.abilities)}
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
              {this.renderSecondAwakening(unlocks.secondAwakening)}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }

  renderBonus (bonus) {
    return (
      <div>
        {bonus ? (
          <div className='bonus'>
            <span><strong>Bonus: </strong>{bonus.stat} +{bonus.amount}</span>
          </div>
        ) : null}
      </div>
    )
  }

  renderRomanceAvailable (romance) {
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

  cleanText (text) {
    let result = ''
    if (text) {
      let impactfulChoicesRegex = new RegExp('Impactful Conversation Choices for this Rank:', 'ig')
      result = text.replace(impactfulChoicesRegex, '')
    }

    return result
  }

  render () {
    const {requires, choices, available, unlocks, afterMementos, bonus, mementosRequest, romance} = this.props.rank
    let text = this.cleanText(this.props.rank.text)
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
        {this.renderRomanceAvailable(romance)}
        {this.renderChoices(choices)}
        {this.renderMementosRequest(mementosRequest)}
        {this.renderAfterMementos(afterMementos)}
        {this.renderUnlocks(unlocks)}
        {this.renderBonus(bonus)}
        <br />
      </div>
    )
  }
}

export default RankItem
