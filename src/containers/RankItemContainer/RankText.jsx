import React, { Component } from 'react'

export default class RankText extends Component {
  formatText (text) {
    let result = this.cleanText(text)
    if (result) {
      const automaticUnlockRegex = new RegExp('automatic:(.*)')
      const match = automaticUnlockRegex.exec(result)
      if (match) {
        const automaticUnlockFomatted = String.format('Unlocked automatically{0}', match[1])
        result = text.replace(automaticUnlockRegex, automaticUnlockFomatted)
      }
    }
    return result
  }

  cleanText (text) {
    let result = ''
    if (text) {
      const impactfulChoicesRegex = new RegExp('Impactful Conversation Choices for this Rank:', 'ig')
      result = text.replace(impactfulChoicesRegex, '')
    }

    return result
  }

  render() {
    const {text} = this.props
    if (text) {
      return (
        <div className="rankText">
          <span>{this.formatText(text)}<br /></span>
        </div>
      )
    } else {
      return null
    }
  }
}
