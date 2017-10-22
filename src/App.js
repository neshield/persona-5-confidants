import './App.css'
import React, { Component } from 'react'
import RankList from './containers/RankList'
import confidants from './data/confidants'
import ConfidantDropdown from './containers/ConfidantDropdown'
import confidantLabels from './data/confidant-labels'
import utils from './utils'

// TODO: Fix Iwai, Tae, Yoshida

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      confidant: 'ann',
      labels: confidantLabels
    }
  }

  handleChange (confName) {
    this.setState({
      confidant: confName
    })
  }

  renderRankList () {
    return (
      <RankList
        confidant={confidants.get(this.state.confidant)}
      />
    )
  }

  renderConfidantDropdown (labels) {
    return (
      <ConfidantDropdown
        labels={labels}
        onChange={this.handleChange}
        parent={this}
      />
    )
  }

  render () {
    return (
      <div className='App'>
        {this.renderConfidantDropdown(this.state.labels)}
        <h2 className='Centered'>{utils.upFirstLetter(this.state.confidant).replace('-w', ' W')}</h2>
        <h3 className='Centered'>{utils.upFirstLetter(confidants.get(this.state.confidant).arcana)}</h3>
        <h3>Location: {confidants.get(this.state.confidant).location}</h3>
        {confidants.get(this.state.confidant).gift ? (
          <h3>Good Gifts: {confidants.get(this.state.confidant).gift}</h3>
          ) : null}
        {this.renderRankList()}
        <footer className='Centered'>Information gathered from: <a target='_blank' rel='noopener noreferrer'
          href='https://www.rpgsite.net/feature/5479-persona-5-confidant-guide-all-conversation-choices-answers-romance-options-gifts-skill-unlocks'>RPGSite Persona 5 Confidant Guide</a></footer>
      </div>
    )
  }
}

export default App
