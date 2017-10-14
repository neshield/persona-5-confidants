'use strict'

const rankRegExp = new RegExp('Rank (\\d{1,2}):')
const choiceRegExp = new RegExp('Choice (\\d{1,2}):')
const locationRegExp = new RegExp('Location: (.+)')
const nameRegExp = new RegExp('Name: (.+)')
const giftRegExp = new RegExp('Gift: (.+)')
const arcanaRegExp = new RegExp('Arcana: (.+)')

function Confidant (lines) {
  const confidant = {ranks: []}

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
      rankObj.text += line
    }
  })

  return confidant
}

module.exports = Confidant
