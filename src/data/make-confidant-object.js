'use strict';

//const fs = require('fs');
const readline = require('readline');
const fse = require('fs-extra');
const path = require('path');
const Promise = require('bluebird');
const Confidant = require('../modules/Confidant');

// const rd = readline.createInterface({
//   input: fse.createReadStream('./makoto.txt'),
//   console: false
// });

return fse.readdir(path.join(__dirname, 'confidant-sources')).then((filenames) => {
  const filepaths = filenames.map(
    (name) => path.join(__dirname, 'confidant-sources', name)
    );
  console.log(filepaths);

  return Promise.map(filepaths, (filepath) => {
    return convertToConfidantObject(filepath);
  })
}).then((confidants) => {
  console.log(confidants);
  return Promise.map(confidants, (confidant) => {
    return fse.writeFile(getJsonFilename(confidant.name),
      JSON.stringify(confidant), 'utf8');
  })
})

function getJsonFilename(filepath) {
  return path.join(__dirname, 'confidant-objects',
    path.basename(filepath) + '.json');
}

function convertToConfidantObject(filepath) {
  return fse.readFile(filepath, 'utf8').then((data) => {
    const lines = data.split('\n').map((line) => line.trim());
    return new Confidant(lines);
// Location: Underground Mall in Shibuya after school.
// Gifts: Powdered Green Tea Set, KGB49 Music CD.
    // const rankRegExp = new RegExp('Rank (\\d{1,2}):');
    // const choiceRegExp = new RegExp('Choice (\\d{1,2}):');
    // const locationRegExp = new RegExp('Location: (\\w*)');

    // let arcana;
    // let name;
    // let location;
    // let gifts;
    // let rankObj = {};
    // const ranks = [];
    // lines.forEach((line, i) => {
    //   if (i === 0) {
    //     arcana = line;
    //     return;
    //   } else if (i === 1) {
    //     name = line;
    //     return;
    //   }
    //   let rankMatch = line.match(rankRegExp);
    //   let choiceMatch = line.match(choiceRegExp);
    //   let locationMatch = line.match(locationRegExp);
    //   if (rankMatch) {
    //     if(JSON.stringify(rankObj) !== '{}') {
    //       ranks.push(rankObj);
    //       rankObj = JSON.parse(JSON.stringify({}));
    //     }
    //     rankObj.text = '';
    //     rankObj.rank = rankMatch[1];
    //   } else if (choiceMatch) {
    //     if(rankObj.choices === undefined) {
    //       rankObj.choices = [];
    //     }
    //     rankObj.choices.push(line);
    //   } else if (locationMatch) {
    //     location = locationMatch[1];
    //   } else {
    //     rankObj.text += line;
    //   }
    // })
    // ranks.push(rankObj);
    // const confObj = {
    //   arcana: arcana,
    //   name: name,
    //   location: location,
    //   gifts: gifts,
    //   ranks: ranks
    // }
    // //console.log(ranks);
    // return confObj;
  })
}