/**
 * 13/05/2017
 * https://www.hackerrank.com/challenges/points-on-a-line
 */
process.stdin.resume();
process.stdin.setEncoding( 'ascii' );

let input_stdin = "";
let input_stdin_array = "";

process.stdin.on( 'data', data => {
	input_stdin += data;
} );

process.stdin.on( 'end', () => {
	input_stdin_array = input_stdin.split( '\n' );
	input_stdin_array.shift();
	main();    
});

function main() {
	const x_tab = [];
	const y_tab = [];

	input_stdin_array.forEach( coords => {
		coords = coords.split( ' ' );
		x_tab.push( coords[ 0 ] );
		y_tab.push( coords[ 1 ] );
	} );
	
	const onLine = x_tab.every( x => x == x_tab[0] ) || y_tab.every( y => y == y_tab[0] );

	console.log( onLine ? 'YES' : 'NO' );
}
