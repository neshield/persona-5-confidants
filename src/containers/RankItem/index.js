import React, { Component } from 'react'
import abilities from '../../data/abilities.json'
import '../../index.css'

class RankItem extends Component {
  renderChoice (choiceObj) {
    return (
      <li key={choiceObj.choice}>
        <span>{choiceObj.choice}</span>
        <ul>
          {choiceObj.options.map((opt) => {
            return (
              <li key={opt.dialogue}>{opt.dialogue} + {opt.points}</li>
            )
          })}
        </ul>
      </li>
    )
  }

  renderRomance (choiceObj) {
    return (
      <li key={choiceObj.choice}>
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
            <span><strong>Important conversation choices after clearing Mementos Request</strong></span>
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
        <li key={name}>
          <span><strong>Ability: {name}</strong>: {description}</span>
        </li>
      )
    } else if (ability && ability.name) {
      return (
        <li key={ability.name}>
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
                <li key={unlocks.location}>
                  <span><strong>Location: {unlocks.location}</strong></span>
                </li>
                ) : null}
              {unlocks.fusion ? (
                <li key={unlocks.fusion}>
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

  formatText (text) {
    let result = this.cleanText(text)
    if (result) {
      const automaticUnlockRegex = new RegExp('automatic:(.*)')
      const match = automaticUnlockRegex.exec(result)
      if (match) {
        const automaticUnlockFomatted = String.format('Unlocked automatically{0}', match[1])
        result = text.replace(automaticUnlockRegex, automaticUnlockFomatted)
      }
    }
    return result
  }

  cleanText (text) {
    let result = ''
    if (text) {
      const impactfulChoicesRegex = new RegExp('Impactful Conversation Choices for this Rank:', 'ig')
      result = text.replace(impactfulChoicesRegex, '')
    }

    return result
  }

  renderRequirements (requires) {
    if (requires) {
      return (
        <div>
          {requires.rank ? (
            <span className='Requires'><strong>Requires Stat:</strong> Rank {requires.rank} {requires.stat}<br /></span>
          ) : null}
          {requires.clearedMementosRequest ? (
            <span className='RequiresClearedMementosRequest'><strong>Requires Cleared Mementos Request:</strong> {requires.clearedMementosRequest}<br /></span>
          ) : null}
          {requires.persona ? (
            <span className='RequiresPersona'><strong>Requires Persona:</strong> {requires.persona.name} with {requires.persona.ability}</span>
          ) : null}
        </div>
      )
    } else {
      return null
    }
  }

  render () {
    const {requires, choices, available, unlocks, afterMementos, bonus, mementosRequest, romance} = this.props.rank
    let text = this.formatText(this.props.rank.text)
    return (
      <div className='RankItem'>
        <span><strong>Rank {this.props.rank.rank}</strong><br /></span>
        {available ? (
          <span className='Available'><strong>Available On:</strong> {available}<br /></span>
        ) : null}
        {this.renderRequirements(requires)}
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
