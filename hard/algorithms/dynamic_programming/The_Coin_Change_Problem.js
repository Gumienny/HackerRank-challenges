/**
 * 08/04/2017
 * https://www.hackerrank.com/challenges/coin-change
 */
function processData( input ) {
	let data = input.split( '\n' );

	data = data.map( val => val.split( ' ' ).map( num => Number( num ) ) );

	let N = data[ 0 ][ 0 ];
	let denominations = data[ 1 ];
	let ways = new Array( N + 1 );

	ways.fill( 0 );
	ways[ 0 ] = 1;

	for ( let i = 0; i < denominations.length; i++ )
		for ( let j = denominations[i]; j <= N; j++ )
			ways[ j ] += ways[ j - denominations[ i ] ];

	console.log( ways[ ways.length - 1 ] );
}
