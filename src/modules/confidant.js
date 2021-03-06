'use strict'

const rankRegExp = new RegExp('Rank (\\d{1,2}):')
const choiceRegExp = new RegExp('Choice (\\d{1,2}):')
const locationRegExp = new RegExp('Location: (.+)')
const nameRegExp = new RegExp('Name: (.+)')
const giftRegExp = new RegExp('Gift: (.+)')
const arcanaRegExp = new RegExp('Arcana: (.+)')

function Confidant (lines) {
  const confidant = {ranks: []}

  function fixSpaces (text) {
    let fixedText
    const punctuationRegex = new RegExp('\\.(\\w)', 'g')
    const match = punctuationRegex.exec(text)
    if (match) {
      fixedText = text.replace(punctuationRegex, `. ${match[1]}`)
    } else {
      fixedText = text
    }

    return fixedText
  }

  if (!lines) {
    return confidant
  }

  let rankObj = {}
  lines.forEach((line, i) => {
    let rankMatch = line.match(rankRegExp)
    let choiceMatch = line.match(choiceRegExp)
    let locationMatch = line.match(locationRegExp)
    let nameMatch = line.match(nameRegExp)
    let giftMatch = line.match(giftRegExp)
    let arcanaMatch = line.match(arcanaRegExp)

    if (nameMatch && confidant.name === undefined) {
      confidant.name = nameMatch[1]
    } else if (locationMatch && confidant.location === undefined) {
      confidant.location = locationMatch[1]
    } else if (giftMatch && confidant.gift === undefined) {
      confidant.gift = giftMatch[1]
    } else if (arcanaMatch && confidant.arcana === undefined) {
      confidant.arcana = arcanaMatch[1]
    } else if (rankMatch) {
      // Fix occasionally no spaces after periods
      rankObj.text = fixSpaces(rankObj.text)
      rankObj = JSON.parse(JSON.stringify({}))
      confidant.ranks.push(rankObj)
      rankObj.text = ''
      rankObj.rank = rankMatch[1]
    } else if (choiceMatch) {
      if (rankObj.choices === undefined) {
        rankObj.choices = []
      }
      rankObj.choices.push(line)
    } else {
      rankObj.text += line.replace(/^\s+|\s+$/g, ' ')
    }
  })

  const finalRankText = confidant.ranks[confidant.ranks.length - 1].text
  if (finalRankText) {
    confidant.ranks[confidant.ranks.length - 1].text = fixSpaces(finalRankText)
  }

  return confidant
}

module.exports = Confidant
