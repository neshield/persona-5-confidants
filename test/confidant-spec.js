'use strict'

const assert = require('chai').assert
const Confidant = require('../src/modules/confidant')

describe('Confidant Object', function () {
  it('Constructs', function () {
    const confidant = new Confidant()
    assert.isDefined(confidant)
  })

  const specs = ['name', 'location', 'gift', 'arcana']

  specs.forEach((prop) => {
    it(`Sets ${prop} correctly`, function () {
      const expected = '123 cd'
      const lines = [
        `${prop.charAt(0).toUpperCase() + prop.slice(1)}: ${expected}`
      ]

      const confidant = new Confidant(lines)
      assert.equal(confidant[prop], expected)
    })
  })

  // it('Handles names with spaces', function() {
  //   const lines = [
  //     'Name: a b c'
  //   ]

  //         const confidant = new Confidant(lines)
  //     assert.equal(confidant.name, '')
  // })

  describe('Ranks', function () {
    it('Sets rank value correctly', function () {
      const lines = [
        'Rank 1:'
      ]

      const confidant = new Confidant(lines)
      const rank = confidant.ranks[0]
      assert.equal(rank.rank, 1)
    })

    it('Sets rank text', function () {
      const texts = ['a', 'b']
      const lines = [
        'Rank 1:',
        texts[0],
        texts[1]
      ]

      const confidant = new Confidant(lines)
      const rank = confidant.ranks[0]
      assert.equal(rank.text, texts[0] + texts[1])
    })

    it('Sets choices', function () {
      const choices = [
        'Choice 1: a',
        'Choice 3: b'
      ]

      const lines = [
        'Rank 1:',
        choices[0],
        choices[1]
      ]

      const confidant = new Confidant(lines)
      const rank = confidant.ranks[0]
      assert.equal(rank.choices[0], choices[0])
      assert.equal(rank.choices[1], choices[1])
    })
  })
})
