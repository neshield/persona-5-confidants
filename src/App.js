import React, { Component } from 'react'
import logo from './logo.svg'
import RankList from './containers/RankList'
import './App.css'
import confidants from './data/confidants'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      confidant: 'makoto'
    }
  }
  renderRankList (confidant) {
    return (
      <RankList
        confidant={confidants.get(confidant)}
      />
    )
  }

  handleClick (confName) {
    this.setState({
      confidant: confName
    })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld />
        <button onClick={() => this.handleClick('yusuke')}>Yusuke</button>
        <button onClick={() => this.handleClick('makoto')}>Makoto</button>
        {this.renderRankList(this.state.confidant)}
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
