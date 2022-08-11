function analyzeArray (argument) {
	let length = argument.length;
	let sum = 0;
	let min, max;
	min = max = argument[0];
	for ( let i = 0; i < length; i++ ) {
		sum += argument[i];
		if ( min > argument[i]) min = argument[i];
		if ( max < argument[i]) max = argument[i];
	}
	return {
		average: sum/length,
		max: max,
		min: min,
		length: length
	}
}

module.exports = analyzeArray;