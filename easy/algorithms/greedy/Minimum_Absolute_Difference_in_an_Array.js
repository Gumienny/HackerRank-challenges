/**
 * 13/09/2017
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/
 */

function main()
{
	let min = Infinity;
	const n = parseInt( readLine() );
	const arr = readLine().split( ' ' ).map( Number ).sort();

	for ( let i = 0; i < n - 1; i++ )
	{
		let diff = Math.abs( arr[i] - arr[i + 1] );

		if ( diff < min )
			min = diff;
	}

	console.log( min );
}
