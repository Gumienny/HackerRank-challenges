/**
 * 13/05/2017
 * https://www.hackerrank.com/challenges/handshake
 */
process.stdin.resume();
process.stdin.setEncoding( 'ascii' );

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on( 'data', data => {
	input_stdin += data;
} );

process.stdin.on( 'end', () => {
	input_stdin_array = input_stdin.split( '\n' );
	main();    
} );

function readLine() {
	return input_stdin_array[ input_currentline++ ];
}

function main() {
	let T = parseInt( readLine() );

	for( let a0 = 0; a0 < T; a0++ )
	{
		let N = parseInt( readLine() );
		let total = 0;

		for ( let i = 0; i < N; i++ )
		{
			total += i;
		}

		console.log( total );
	}
}
