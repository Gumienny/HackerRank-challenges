/**
 * 10/09/2017
 * https://www.hackerrank.com/challenges/recursive-digit-sum/
 */

function processData( input )
{
	let [ n, k ] = input.split( ' ' );
	const sum = n => n.split( '' ).reduce( ( all, elem ) => all + parseInt( elem ), 0 );
	const digit_sum = n => n.length > 1 ? digit_sum( sum( n ).toString()  ) : n;

	n = digit_sum( (sum(n) * Number( k )).toString() );
	console.log( n );
}
