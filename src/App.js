import './App.css'
import React, { Component } from 'react'
import LinkFooter from './containers/LinkFoter/index'
import confidants from './data/confidants'
import ConfidantInfo from './containers/ConfidantInfo/index'
import ConfidantSidebar from './containers/ConfidantSidebar/index'
import { Sidebar, Segment, Menu, Container, Button } from 'semantic-ui-react'
import classNames from 'classnames'

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
      sidebarVisible: false
    }

    this.handleConfidantChangeMenu = this.handleConfidantChangeMenu.bind(this)
  }

  handleConfidantChangeMenu (e, selected) {
    this.setState({menuConfidant: selected.name}) 
  }
 
  toggleVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible })

  render() {
    const { sidebarVisible } = this.state
    const mainContentClasses = classNames(
      {'MainContent' : this.state.sidebarVisible === false},
      {'MainContentThin': this.state.sidebarVisible === true}
    ) 
    return (
      <div>
        <Menu borderless inverted attached="top" size="massive" className="TopBar">
          <Button icon="bars" border="none" outline="none" onClick={this.toggleVisibility} />
          <Menu.Item color="grey" onClick={this.toggleVisibility}>
            Persona 5 Confidant Guide
          </Menu.Item>
        </Menu>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={sidebarVisible} icon='labeled' vertical inverted className="Sidebar">
            <ConfidantSidebar onSelect={this.handleConfidantChangeMenu}/>
          </Sidebar>
          <Sidebar.Pusher className={mainContentClasses}>
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
