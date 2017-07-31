import { createAction } from 'redux-actions';

export const SELECT_HERO = 'select_hero';
export const GO_TO_DUNGEON = 'go_to_dungeon';
export const GO_TO_TAVERN = 'go_to_tavern';
export const RESET = 'reset';

const initialState = {
  selectedHeroes: {}
}

export default function app(state = initialState, action) {

  switch(action.type) {
    case SELECT_HERO:
      return doSelectHero(state, action.payload);
    case 'GO_TO_DUNGEON':
      return doGoToDungeon(state, action.payload);
    case 'GO_TO_TAVERN':
      return doGoToTavern(state, action.payload);
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function doSelectHero(state, payload) {
  return selectedHeroes(state, payload.hero);
}

function doGoToDungeon(state, payload) {
  payload.hero.in_dungeon = true;
  return selectedHeroes(state, payload.hero);
}

function doGoToTavern(state, payload) {
  payload.hero.in_dungeon = false;
  return selectedHeroes(state, payload.hero);
}

function selectedHeroes(state, hero) {
  return { ...state, selectedHeroes: {...state.selectedHeroes, [hero.id]: hero} }
}

export const selectHero = createAction(SELECT_HERO, hero => ({ hero }));
export const goToDungeon = createAction(GO_TO_DUNGEON, hero => ({ hero }));
export const goToTavern = createAction(GO_TO_TAVERN, hero => ({ hero }));
export const reset = createAction(RESET);
