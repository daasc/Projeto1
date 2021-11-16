const {queryString} = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Paulo',
      profession: 'developer'
    };

    expect(queryString(obj)).toBe('name=Paulo&profession=developer');

  });
  it('should throw an erro when an object is passed as value', () => {
    const obj = {
      name: 'Paulo',
      abilities: {
        first: 'developer',
      } 
    };
    expect(() => {
      queryString(obj);
    }).toThrowError()
  });
});