import { suma } from '../index';

describe('suma', () => {
  it('debe sumar dos números correctamente', () => {
    expect(suma(2, 3)).toBe(5);
  });
});