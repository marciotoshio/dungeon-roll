
const initialState = {
  selectedHeroes: []
}

export default function app(state = initialState, action) {

  switch(action.type) {
    case 'SELECT_HERO':
      return selectHero(state, action);
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function selectHero(state, action) {
  if(state.selectedHeroes.map(hero => hero.id).includes(action.hero.id))
    return state;

  return Object.assign({}, state, {
    selectedHeroes: [...state.selectedHeroes, action.hero]
  })
}
