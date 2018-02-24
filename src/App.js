import './App.css'
import React, { Component } from 'react'
import RankList from './containers/RankList/index'
import ConfidantDropdown from './containers/ConfidantDropdown/index'
import LinkFooter from './containers/LinkFoter/index'
import confidants from './data/confidants'
import confidantLabels from './data/confidant-labels'
import utils from './utils'


if (!String.format) {
  String.format = function (format) {
    const args = Array.prototype.slice.call(arguments, 1)
    return format.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] !== 'undefined'
        ? args[number]
        : match
    })
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      confidant: 'ann',
      labels: confidantLabels
    }
    
    this.handleConfidantChange = this.handleConfidantChange.bind(this)
  }

  handleConfidantChange (confName) {
    console.log(`Selected confidant ${confName}`)
    this.setState({
      confidant: confName
    })
  }

  render () {
    return (
      <div className='App'>
        <ConfidantDropdown
          labels={this.state.labels}
          onSelect={this.handleConfidantChange}
        />
        <h2 className='Centered'>{utils.uppercaseFirstLetter(this.state.confidant).replace('-w', ' W')}</h2>
        <h3 className='Centered'>{utils.uppercaseFirstLetter(confidants.get(this.state.confidant).arcana)}</h3>
        <h4>{confidants.get(this.state.confidant).location ? 'Location: ' + confidants.get(this.state.confidant).location : null}</h4>
        {confidants.get(this.state.confidant).gift ? (
          <h4>Good Gifts: {confidants.get(this.state.confidant).gift}</h4>
          ) : null}
        {confidants.get(this.state.confidant).note ? (
          <h4>Note: {confidants.get(this.state.confidant).note}</h4>
        ) : null}

        <RankList
          confidant={confidants.get(this.state.confidant)}
        />
        <LinkFooter />
      </div>
    )
  }
}

export default App
