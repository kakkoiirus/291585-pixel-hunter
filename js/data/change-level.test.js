import {assert} from 'chai';
import {changeLevel} from './change-level.js';
import {INITIAL_STATE} from './game-data.js';

describe(`Check level changer`, () => {

  it(`should change level`, () => {
    assert.equal(changeLevel(INITIAL_STATE, 2).level, 2);
    assert.equal(changeLevel(INITIAL_STATE, 9).level, 9);
  });

  it(`shouldn't allow to set negative numbers`, () => {
    assert.equal(changeLevel(INITIAL_STATE, -1).level, 0);
    assert.equal(changeLevel(INITIAL_STATE, -5).level, 0);
  });

  it(`shouldn't allow to set more than 10 levels`, () => {
    assert.equal(changeLevel(INITIAL_STATE, 11).level, 10);
    assert.equal(changeLevel(INITIAL_STATE, 20).level, 10);
  });
});
