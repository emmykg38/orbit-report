import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("tacos", "december", "yesterday", "tomorrow", true)).toBeTruthy();
  });
});
