import './App.css'
import React, { Component } from 'react'
import LinkFooter from './containers/LinkFoter/index'
import confidants from './data/confidants'
import ConfidantInfo from './containers/ConfidantInfo/index'
import ConfidantSidebar from './containers/ConfidantSidebar/index'
import { Sidebar, Segment, Menu, Container } from 'semantic-ui-react'

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
      visible: true
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
        <Menu borderless inverted attached="top" size="massive" className="TopBar">
          <Menu.Item color="grey">
            Persona 5 Confidant Guide
          </Menu.Item>
        </Menu>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <ConfidantSidebar onSelect={this.handleConfidantChangeMenu}/>
          </Sidebar>
          <Sidebar.Pusher className="MainContent">
            <Container fluid>
            <Segment textAlign='left'>
              <ConfidantInfo
                confidant={confidants.get(this.state.menuConfidant)}
              />
              <LinkFooter />
            </Segment>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default App
