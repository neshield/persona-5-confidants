import React, { Component } from 'react'
import DialogueChoice from './DialogueChoice';

export default class RankAfterMementos extends Component {
  render() {
    const {choices} = this.props
    return (
      <div>
        {choices ? (
          <div className='Choices'>
            <span><strong>Important conversation choices after clearing Mementos Request</strong></span>
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
}
