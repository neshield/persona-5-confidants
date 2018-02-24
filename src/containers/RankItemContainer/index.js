import React, { Component } from 'react'
import '../../index.css'
import RankAvailableOn from './RankAvailableOn.jsx'
import RankRequirements from './RankRequirements.jsx';
import RankText from './RankText.jsx';
import RankBonus from './RankBonus.jsx'
import RankRomanceAvailable from './RankRomanceAvailable.jsx';
import RankLevel from './RankLevel';
import RankUnlocks from './RankUnlocks.jsx';
import RankMementosRequest from './RankMementosRequest.jsx';
import RankAfterMementos from './RankAfterMementos';
import RankDialogue from './RankDialogue';

class RankItemContainer extends Component {
  render () {
    const {requires, choices, available, unlocks, afterMementos, bonus, mementosRequest, romance, rank, text} = this.props.rank
    return (
      <div className='RankItem'>
        <RankLevel level={rank}/>
        <RankAvailableOn available={available}/>
        <RankRequirements requires={requires}/>
        <RankText text={text}/>
        <RankRomanceAvailable romance={romance}/>
        <RankDialogue choices={choices}/>
        <RankMementosRequest mementosRequest={mementosRequest}/>
        <RankAfterMementos choices={afterMementos}/>
        <RankUnlocks unlocks={unlocks}/>
        <RankBonus bonus={bonus}/>
        <br />
      </div>
    )
  }
}

export default RankItemContainer
