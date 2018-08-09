import React, { Component } from 'react'

export default class RankRequirements extends Component {
  render () {
    const {requires} = this.props

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
}
