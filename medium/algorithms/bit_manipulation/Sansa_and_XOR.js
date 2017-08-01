/**
 * 01/08/2017
 * https://www.hackerrank.com/challenges/sansa-and-xor
 */

function processData( input ) {
	const s = n => n * ( 1 + n ) / 2;

	let [ T, ...rest ] = input.split( '\n' );
	
	T = Number( T );

	for ( let test = 0; test < T; test++ ) {
		let N = Number( rest[ 2 * test ] );
		let result = 0;

		if ( N % 2 === 1 ) {
			let seq = rest[ 2 * test + 1 ].split( /\s+/ ).map( int => Number( int ) );

			seq.unshift( null );

			for ( let k = 1, m = Math.ceil( N / 2 ); k <= m; k++ ) {
				let len = N - 2 * ( k - 1 );
				let freq = 2 * s( k - 1 ) + len * k;

				if ( freq % 2 === 1 )
					result ^= seq[ k ] ^ ( len !== 1 ? seq[ N + 1 - k ] : 0 );
			}
		}
		
		console.log( result );
	}
} 
