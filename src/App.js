import React, { Component } from 'react'
import logo from './logo.svg'
import RankList from './containers/RankList'
import './App.css'
import confidants from './data/confidants'
import ConfidantDropdown from './containers/ConfidantDropdown'
import confidantNames from './data/confidant-names'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      confidant: 'makoto',
      names: confidantNames
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

  renderConfidantDropdown (names) {
    return (
      <ConfidantDropdown
        names={names}
        onChange={this.handleChange}
        parent={this}
      />
    )
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <h2>{this.state.confidant}</h2>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld />
        {this.renderConfidantDropdown(this.state.names)}
        {this.renderRankList()}
      </div>
    )
  }
}

class HelloWorld extends Component {
  render () {
    return (
      <h3>Hello, World!</h3>
    )
  }
}
export default App
