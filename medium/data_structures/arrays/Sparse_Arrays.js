/**
 * 07.04.2017
 * https://www.hackerrank.com/challenges/sparse-arrays
 */
function main() {
	const N = readLine(), 
	const dict = {};
	let Q = 0, key, i = 0;

	while ( i++ < N )
	{
		key = readLine();
		dict.hasOwnProperty( key ) ? dict[key]++ : dict[ key ] = 1;
	}
    
	i = 0;
	Q = readLine();

	while ( i++ < Q )
	{
		key = readLine();
		console.log( dict.hasOwnProperty( key ) ? dict[key] : 0 );
	}
}
