import React, { Component } from 'react'
import {Message} from 'semantic-ui-react'
import RankList from '../RankList'
import utils from '../../utils'

export default class ConfidantInfo extends Component {
  render () {
    const {confidant} = this.props
    return (
      confidant ? (
        <div>
          <h2 className='Centered'>{utils.uppercaseFirstLetter(confidant.name).replace('-w', ' W')}</h2>
          <h3 className='Centered'>{utils.uppercaseFirstLetter(confidant.arcana)}</h3>
          <h4>{confidant.location ? 'Location: ' + confidant.location : null}</h4>
          {confidant.gift ? (
            <h4>Good Gifts: {confidant.gift}</h4>
        ) : null}
          {confidant.note ? (
            <Message compact>
              <Message.Header>
                  Impotant Note
                </Message.Header>
              <p>
                {confidant.note}
              </p>
            </Message>
        ) : null}

          <RankList
            confidant={confidant}
        />
        </div>) : null
    )
  }
}
