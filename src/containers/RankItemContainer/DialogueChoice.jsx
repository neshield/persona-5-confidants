import React, { Component } from 'react'

export default class DialogueChoice extends Component {
  render() {
    const {choiceObj} = this.props
    if (choiceObj.romance) {
      return this.renderRomance(choiceObj)
    } else {
      return this.renderChoice(choiceObj)
    }
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

  renderChoice (choiceObj) {
    return (
      <li>
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

}
