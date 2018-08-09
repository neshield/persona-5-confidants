import React, { Component } from 'react'

class LinkFooter extends Component {
  render () {
    return (
      <footer className='Centered'>
        Information gathered from:
        <br />
        <a target='_blank' rel='noopener noreferrer'
          href='https://www.rpgsite.net/feature/5479-persona-5-confidant-guide-all-conversation-choices-answers-romance-options-gifts-skill-unlocks'>RPGSite Persona 5 Confidant Guide</a>
        <br />
        <a target='_blank' rel='noopener noreferrer'
          href='https://www.gamefaqs.com/ps4/835628-persona-5/faqs/73868'>Confidant Guide by JustChillin</a>
        <br />
        <a target='_blank' rel='noopener noreferrer'
          href='https://www.hardcoregamer.com/2017/04/04/persona-5-confidant-guide/252919/'>Persona 5 Confidant Guide | Hardcore Gamer</a>
      </footer>
    )
  }
}

export default LinkFooter
