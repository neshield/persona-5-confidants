import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import confidants from '../../data/confidants'

class ConfidantSidebar extends Component {
  render () {
    const { onSelect } = this.props
    const menuItems = []
    confidants.forEach((value, key) => {
      menuItems.push(
        <Menu.Item name={value.id} onClick={onSelect} key={value.id}>
          {value.arcana}
        </Menu.Item>
      )
    })
    return (
      <div>
        {menuItems}
      </div>
    )
  }
}

export default ConfidantSidebar
