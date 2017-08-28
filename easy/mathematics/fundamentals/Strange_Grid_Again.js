/**
 * 28/08/2017
 * https://www.hackerrank.com/challenges/strange-grid
 */

function processData( input )
{
	const [r, c] = input.split( ' ' ).map( Number );

	console.log( Math.floor( ( r - 1 ) / 2 ) * 10 + ( r % 2 === 0 ? 1 : 0 ) + ( c - 1 ) * 2 );
}
