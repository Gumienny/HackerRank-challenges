/**
 * 23/04/2017
 * https://www.hackerrank.com/challenges/lonely-integer
 */
function processData( input ) {
	console.log( input.split( '\n' )[1].split( ' ' ).map( x => Number(x) ).reduce( ( a, x ) => a ^= x, 0 ) );
}

process.stdin.resume();
process.stdin.setEncoding( "ascii" );
_input = "";
process.stdin.on( "data", function ( input ) {
	_input += input;
});

process.stdin.on( "end", function () {
	processData( _input );
});
