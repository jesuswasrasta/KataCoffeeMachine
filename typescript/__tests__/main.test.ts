import { helloWorld } from '../src/main';

describe('Greetings', () => {
  it('Hello World!', () => {
    const value = helloWorld();
    expect(value).toEqual("Hello World");
  });
});
