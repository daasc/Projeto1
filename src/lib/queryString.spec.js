import { queryString, parse } from './queryString.js';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Paulo',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Paulo&profession=developer');
  });
  it('should throw an erro when an object is passed as value', () => {
    const obj = {
      name: 'Paulo',
      abilities: {
        first: 'developer',
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Paulo&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Paulo',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value to object', () => {
    const qs = 'name=Paulo';
    expect(parse(qs)).toEqual({
      name: 'Paulo',
    });
  });

  it('should convert a query string to an object takiing care of comma separated values', () => {
    const qs = 'name=Paulo&abilities=JS,TDD';
    expect(parse(qs)).toEqual({
      name: 'Paulo',
      abilities: ['JS', 'TDD'],
    });
  });
});
