/**
 * 06/09/2017
 * https://www.hackerrank.com/challenges/rectangular-game
 */
 
function processData( input ) {
	let [n, ...data] = input.split( '\n' );

	data = data.map( e => e.split( ' ' ) )

	let x = data.map( e => Number( e[0] ) );
	let y = data.map( e => Number( e[1] ) );
	
	x = Math.min( ...x );
	y = Math.min( ...y );

	console.log( x * y );
} 
