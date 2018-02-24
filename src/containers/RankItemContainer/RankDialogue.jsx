import React, { Component } from 'react'
import DialogueChoice from './DialogueChoice.jsx'
export default class RankDialogue extends Component {
  render() {
    const {choices} = this.props
    return (
      <div>
        {choices ? (
          <div className='Choices'>
            <span><strong>Important conversation choices</strong></span>
            <ul>
              {choices.map((choiceObj) => {
                return <DialogueChoice choiceObj={choiceObj} key={choiceObj.choice} />
              })}
            </ul>
          </div>
        ) : null}
      </div>
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

}
