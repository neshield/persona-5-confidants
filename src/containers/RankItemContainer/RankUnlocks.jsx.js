import React, { Component } from 'react'
import abilities from '../../data/abilities.json'

export default class RankUnlocks extends Component {
  render () {
    const {unlocks} = this.props
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

  renderAbilities (abilities) {
    if (abilities) {
      return abilities.map((ability) => this.renderAbility(ability))
    }
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
}
