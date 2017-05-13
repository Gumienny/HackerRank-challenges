/**
 * 13/05/2017
 * https://www.hackerrank.com/challenges/game-with-cells
 */
process.stdin.resume();
process.stdin.setEncoding( 'ascii' );

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on( 'data', data => {
	input_stdin += data;
});

process.stdin.on( 'end', () => {
	input_stdin_array = input_stdin.split( '\n' );
	main();    
});

function readLine()
{
	return input_stdin_array[ input_currentline++ ];
}

/////////////// ignore above this line ////////////////////

function main()
{
	let n_temp = readLine().split( ' ' );
	let n = parseInt( n_temp[ 0 ] );
	let m = parseInt( n_temp[ 1 ] );

	console.log( Math.ceil( m / 2 ) * Math.ceil( n / 2 ) );
}
