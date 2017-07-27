export const selectHero = hero => {
  return {
    type: 'SELECT_HERO',
    hero: hero
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
