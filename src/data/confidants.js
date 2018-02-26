import ann from './confidant-objects/Ann.json'
import chihaya from './confidant-objects/Chihaya.json'
import futaba from './confidant-objects/Futaba.json'
import goro from './confidant-objects/Goro.json'
import haru from './confidant-objects/Haru.json'
import hifumi from './confidant-objects/Hifumi.json'
import ichiko from './confidant-objects/Ichiko.json'
import igor from './confidant-objects/Igor.json'
import iwai from './confidant-objects/Iwai.json'
import makoto from './confidant-objects/Makoto.json'
import mishima from './confidant-objects/Mishima.json'
import morgana from './confidant-objects/Morgana.json'
import ryuji from './confidant-objects/Ryuji.json'
import sadayo from './confidant-objects/Sadayo.json'
import sae from './confidant-objects/Sae.json'
import shinya from './confidant-objects/Shinya.json'
import sojiro from './confidant-objects/Sojiro.json'
import tae from './confidant-objects/Tae.json'
import twinWardens from './confidant-objects/Twin-Wardens.json'
import yoshida from './confidant-objects/Yoshida.json'
import yusuke from './confidant-objects/Yusuke.json'

const confidants = new Map()
confidants.set(ann.id, ann)
confidants.set(chihaya.id, chihaya)
confidants.set(futaba.id, futaba)
confidants.set(goro.id, goro)
confidants.set(haru.id, haru)
confidants.set(hifumi.id, hifumi)
confidants.set(ichiko.id, ichiko)
confidants.set(igor.id, igor)
confidants.set(iwai.id, iwai)
confidants.set(makoto.id, makoto)
confidants.set(mishima.id, mishima)
confidants.set(morgana.id, morgana)
confidants.set(ryuji.id, ryuji)
confidants.set(sadayo.id, sadayo)
confidants.set(sae.id, sae)
confidants.set(shinya.id, shinya)
confidants.set(sojiro.id, sojiro)
confidants.set(tae.id, tae)
confidants.set(twinWardens.id, twinWardens)
confidants.set(yoshida.id, yoshida)
confidants.set(yusuke.id, yusuke)

export default confidants

// const path = require('path')
// // const fse = require('fs-extra')
// // const fs = require('fs')
// const confidantNames = require('./confidant-names')
// console.log(confidantNames)
// console.log(typeof confidantNames)
// console.log(confidantNames.forEach)
// // const filenames = fs.readdirSync(path.join(__dirname, 'data'))

// const confidants = new Map()
// confidantNames.forEach((name) => {
//   // const filepath = path.join(__dirname, 'confidant-objects', name)
//   const filepath = `./confidant-objects/${name}`
//   console.log(filepath)
//   const data = require(filepath)
//   confidants.set(data.name.toLowerCase(), data)
// })

// // fs.readdir(path.join(__dirname, 'data'), function (err, filenames) {
// //   filenames.forEach((file) => {
// //     const data = require(path.join(__dirname, 'data', file))
// //     confidants.set(data.name.toLowerCase(), data)
// //   })

// //   console.log(confidants)
// // })

// console.log(confidants)
// export default confidants

// // const confidants = [
// //   {
// //     "arcana": "Fool",
// //     "name": "Igor",
// //     "ranks": [
// //       {
// //         "rank": 1,
// //         "text": "Automatically on 4/12. Unlocks Wild Talk ability, allowing for negotiation with Shadows during a Hold Up. Unlocks Arcana Burst, gifting Bonus EXP to Persona of this Arcana based on this Confidant's rank."
// //       }
// //     ]
// //   }
// // ];
