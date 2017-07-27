import {Paladina,Encantatriz} from '../../models/hero'

describe('Paladina', () => {

  const hero = new Paladina(0);

  it('returns full name', () => {
    expect(hero.full_name()).toBe('Cruzada / Paladina');
  });

  describe('passing low level to constructor', () => {
    const hero = new Paladina(3);

    it('returns low level name', () => {
      expect(hero.name()).toBe('Cruzada');
    });
  });

  describe('passing high level to constructor', () => {
    const hero = new Paladina(7);

    it('returns high level name', () => {
      expect(hero.name()).toBe('Paladina');
    });
  });
});

describe('Encantatriz', () => {

  const hero = new Encantatriz(0);

  it('returns full name', () => {
    expect(hero.full_name()).toBe('Encantatriz / Fascinadora');
  });

  describe('passing low level to constructor', () => {
    const hero = new Encantatriz(3);

    it('returns low level name', () => {
      expect(hero.name()).toBe('Encantatriz');
    });
  });

  describe('passing high level to constructor', () => {
    const hero = new Encantatriz(7);

    it('returns high level name', () => {
      expect(hero.name()).toBe('Fascinadora');
    });
  });
});
