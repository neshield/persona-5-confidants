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

// Party Members By Order of Meeting
confidants.set(morgana.id, morgana)
confidants.set(ryuji.id, ryuji)
confidants.set(ann.id, ann)
confidants.set(yusuke.id, yusuke)
confidants.set(makoto.id, makoto)
confidants.set(futaba.id, futaba)
confidants.set(chihaya.id, chihaya)
confidants.set(haru.id, haru)
confidants.set(goro.id, goro)

// Other Confidants roughly by start
confidants.set(sojiro.id, sojiro)
confidants.set(igor.id, igor)
confidants.set(twinWardens.id, twinWardens)
confidants.set(mishima.id, mishima)
confidants.set(iwai.id, iwai)
confidants.set(tae.id, tae)
confidants.set(sae.id, sae)
confidants.set(sadayo.id, sadayo)
confidants.set(hifumi.id, hifumi)
confidants.set(ichiko.id, ichiko)
confidants.set(yoshida.id, yoshida)
confidants.set(shinya.id, shinya)

export default confidants
