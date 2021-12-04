import { sum } from './calculator';
it('should sum 2 and 2 the result must be 4', () => {
  expect(sum(2, 4)).toBe(6);
});

it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
  expect(sum('2', 4)).toBe(6);
});

it('should throw an error if what is provided to the methos cannot be summed', () => {
  expect(() => {
    sum('', 1);
  }).toThrowError();
});
