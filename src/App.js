import './App.css'
import React, { Component } from 'react'
import LinkFooter from './containers/LinkFoter/index'
import confidants from './data/confidants'
import ConfidantInfo from './containers/ConfidantInfo/index'
import ConfidantSidebar from './containers/ConfidantSidebar/index'
import { Sidebar, Segment, Button, Menu, Header } from 'semantic-ui-react'

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
      menuConfidant: 'magician_morgana',
      visible: false
    }

    this.handleConfidantChangeMenu = this.handleConfidantChangeMenu.bind(this)
  }

  handleConfidantChangeMenu (e, selected) {
    this.setState({menuConfidant: selected.name}) 
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Button onClick={this.toggleVisibility}>Select A Confidant</Button>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <ConfidantSidebar onSelect={this.handleConfidantChangeMenu}/>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment textAlign='center'>
              <ConfidantInfo
                confidant={confidants.get(this.state.menuConfidant)}
              />
              <LinkFooter />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default App
