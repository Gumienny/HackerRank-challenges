/**
 * 24/08/2017
 * https://www.hackerrank.com/challenges/special-multiple/
 */
 
function processData(input) {
	const [ t, ...data ] = input.split( '\n' ).map( Number );

	data.forEach( n => {
		let f = 0;

		for ( let i = 1; i <= 10000; i++ ) {
			if ( ( f = parseInt( ( i ).toString( 2 ).replace( /1/g, '9' ), 10 ) )  % n === 0 ) {
				process.stdout.write( f + '\n' );
				break;
			}
		}
	} );
}
