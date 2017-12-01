import { FizzBuzz } from './FizzBuzz';

describe('A FizzBuzz generator', () => {
    let fizzBuzz: FizzBuzz;
    const FIZZ = 'Fizz';
    const BUZZ = 'Buzz'
    const FIZZ_BUZZ = 'FizzBuzz';

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

    it('should return the number 1 when 1 is played', () => {
        const result = fizzBuzz.generate(1);

        expect(result).toBe(1);
    });

    it('should return the number 2 when 2 is played', () => {
        const result = fizzBuzz.generate(2);

        expect(result).toBe(2);
    });

    it('should return "Fizz" when 3 is played', () => {
        const result = fizzBuzz.generate(3);

        expect(result).toBe(FIZZ);
    });

    it('should return "Fizz" when 6 is played', () => {
        const result = fizzBuzz.generate(6);

        expect(result).toBe(FIZZ);
    });

    it('should return "Buzz" when 5 is played', () => {
        const result = fizzBuzz.generate(5);

        expect(result).toBe(BUZZ);
    });

    it('should return "Buzz" when 10 is played', () => {
        const result = fizzBuzz.generate(10);

        expect(result).toBe(BUZZ);
    });

    it('should return "FizzBuzz" when 15 is played', () => {
        const result = fizzBuzz.generate(15);

        expect(result).toBe(FIZZ_BUZZ);
    });

    it('should return "FizzBuzz" when 30 is played', () => {
        const result = fizzBuzz.generate(30);

        expect(result).toBe(FIZZ_BUZZ);
    });

});