'use strict'

const fse = require('fs-extra')
const path = require('path')
const Promise = require('bluebird')
// const Confidant = require('../modules/Confidant')

function getJsonFilename (filepath) {
  return path.join(__dirname, 'confidant-objects',
      path.basename(filepath) + '.json')
}

function convertToConfidantObject (filepath) {
  return fse.readJSON(filepath, 'utf8').then((data) => {
    data.ranks.forEach((rank) => {
      if (rank.choices) {
        const choiceObjs = rank.choices.map((choiceStr) => {
          return handleChoices(choiceStr)
        })
        rank.choices = choiceObjs
      }
    })
    return data
  })
}

// function convertToConfidantObject (filepath) {
//   return fse.readFile(filepath, 'utf8').then((data) => {
//     const lines = data.split('\n').map((line) => line.trim())
//     return new Confidant(lines)
//   })
// }

function handleChoices (choiceStr) {
  if (typeof choiceStr !== 'string') {
    return choiceStr
  }
  const choiceObj = {}
  const choiceRegex = new RegExp('(Choice \\d:)(.*)')
  const choiceMatch = choiceRegex.exec(choiceStr)
  console.log(choiceMatch)
  choiceObj.choice = choiceMatch[1]

  const options = choiceMatch[2].split('/')
  choiceObj.options = options.map((opt) => {
    const optObj = {}
    const optRegex = new RegExp('(.*)\\+(\\d)')
    const optMatch = optRegex.exec(opt.trim())

    optObj.dialogue = optMatch[1].trim()
    optObj.points = optMatch[2]

    return optObj
  })

  return choiceObj
}

function makeConfidantObjects () {
  return fse.readdir(path.join(__dirname, 'confidant-objects')).then((filenames) => {
    const filepaths = filenames.map(
      (name) => path.join(__dirname, 'confidant-objects', name)
      )

    return Promise.map(filepaths, (filepath) => {
      return convertToConfidantObject(filepath)
    })
  }).then((confidants) => {
    return Promise.map(confidants, (confidant) => {
      return fse.writeFile(getJsonFilename(confidant.name.replace(/\s+/g, '-')),
        JSON.stringify(confidant, null, '\t'), 'utf8')
    })
  })
}

makeConfidantObjects().then(() => {
  console.log('completed')
  process.exit(0)
}).catch((err) => {
  console.error(err)
  process.exit(1)
})

// function makeConfidantObjects () {
//   return fse.readdir(path.join(__dirname, 'confidant-sources')).then((filenames) => {
//     const filepaths = filenames.map(
//       (name) => path.join(__dirname, 'confidant-sources', name)
//       )

//     return Promise.map(filepaths, (filepath) => {
//       return convertToConfidantObject(filepath)
//     })
//   }).then((confidants) => {
//     return Promise.map(confidants, (confidant) => {
//       return fse.writeFile(getJsonFilename(confidant.name.replace(/\s+/g, '-')),
//         JSON.stringify(confidant, null, '\t'), 'utf8')
//     })
//   })
// }

// makeConfidantObjects()

// handleChoices('Choice 1: "She\'s so strong." +3 / "Are you feeling better now?" +3 / "So are you friends again?" +2')
