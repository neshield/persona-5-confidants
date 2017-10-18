import React, { Component } from 'react'
import '../index.css'

class RankItem extends Component {
  // renderChoices(choices) {
  //   return (
  //     {choices ? (
  //       <span> found choices</span>
  //       ) : null}

  //   )
  // }

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
          <ul>
            {choices.map((choice) => {
              return this.renderChoice(choice)
            })}
          </ul>
        ) : null}
      </div>
    )
  }

        //   {this.props.rank.choices ? (
        //     <span> found choices</span>
        // ) : null}

  render () {
    // TODO: style text for abilities
    // TODO: choices
    return (
      <div className='RankItem'>
        <div className='Choices'>
          {this.renderChoices(this.props.rank.choices)}
        </div>
        <span><strong>Rank {this.props.rank.rank}</strong><br />{this.props.rank.text}</span>
      </div>
    )
  }
}

export default RankItem
