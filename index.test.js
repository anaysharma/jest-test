const analyzeArray = require('./analyzeArray');
const calculator = require('./calculator');
const capitalize = require('./capitalize');
const ceasarCipher = require('./ceasarCipher')
const reverseString = require('./reverseString');

describe( "function analyzeArray()", () => {
	test('[1,2,3,4] should result in \n\t{\n\t\taverage: 2.5,\n\t\tmin: 1,\n\t\tmax:4,\n\t\tlength:4\n\t}', () => {
		expect(analyzeArray([1,2,3,4])).toMatchObject(
			{
				average: 2.5,
				min: 1,
				max: 4,
				length: 4
			}
		);
	});
	test('[2,4,6] should result in \n\t{\n\t\taverage: 4,\n\t\tmin: 2,\n\t\tmax:6,\n\t\tlength:3\n\t}', () => {
		expect(analyzeArray([2,4,6])).toMatchObject(
			{
				average: 4,
				min: 2,
				max: 6,
				length: 3
			}
		);
	});
	test('[2,3,4] should result in \n\t{\n\t\taverage: 3,\n\t\tmin: 2,\n\t\tmax:4,\n\t\tlength:3\n\t}', () => {
		expect(analyzeArray([2,3,4])).toMatchObject(
			{
				average: 3,
				min: 2,
				max: 4,
				length: 3
			}
		);
	});
	test('[5,10,15,20] should result in \n\t{\n\t\taverage: 12.5,\n\t\tmin: 5,\n\t\tmax:20,\n\t\tlength:4\n\t}', () => {
		expect(analyzeArray([5,10,15,20])).toMatchObject(
			{
				average: 12.5,
				min: 5,
				max: 20,
				length: 4
			}
		);
	});
});

describe( "object calculator", () => {
	test('calculator.add(2,5) should result in 7', () => {
		expect(calculator.add(2,5)).toBe(7);
	});
	test('calculator.subtract(2,5) should result in -3', () => {
		expect(calculator.subtract(2,5)).toBe(-3);
	});
	test('calculator.multiply(2,5) should result in 10', () => {
		expect(calculator.multiply(2,5)).toBe(10);
	});
	test('calculator.divide(2,5) should result in 0.4', () => {
		expect(calculator.divide(2,5)).toBe(0.4);
	});
});

describe( "function capitalize()", () => {
    test('"anay" should result in "Anay"', () => {
    	expect(capitalize("anay")).toBe('Anay');
    });
    test('"sharma" should result in "Sharma"', () => {
    	expect(capitalize("sharma")).toBe('Sharma');
    });
    test('"john" should result in "John"', () => {
    	expect(capitalize("john")).toBe('John');
    });
    test('"doe" should result in "Doe"', () => {
    	expect(capitalize("doe")).toBe('Doe');
    });
});


describe( "function ceasarCipher()", () => {
	test('"anay" should result in "fsfd"', () => {
		expect(ceasarCipher("anay")).toBe("fsfd");
	});
	test('("sharma", 10) should result in "crkbwk"', () => {
		expect(ceasarCipher("sharma", 10)).toBe("crkbwk");
	});
	test('("john", 1) should result in "kpio"', () => {
		expect(ceasarCipher("john", 1)).toBe("kpio");
	});
	test('("doe", 2) should result in "fqg"', () => {
		expect(ceasarCipher("doe", 2)).toBe("fqg");
	});
});

describe( "function reverseString()", () => {
	test( '"anay" should result in "yana"', () => {
		expect(reverseString("anay")).toBe("yana");
	});
	test( '"sharma" should result in "amrahs"', () => {
		expect(reverseString("sharma")).toBe("amrahs");
	});
	test( '"john" should result in "nhoj"', () => {
		expect(reverseString("john")).toBe("nhoj");
	});
	test( '"doe" should result in "eod"', () => {
		expect(reverseString("doe")).toBe("eod");
	});
})