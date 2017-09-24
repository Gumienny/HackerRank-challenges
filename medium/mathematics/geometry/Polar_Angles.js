/**
 * 24/09/2017
 * https://www.hackerrank.com/challenges/polar-angles/
 */

function processData( input )
{
	const atan = ( a ) => a[1] < 0 ? Math.atan2( a[1], a[0] ) + 2 * Math.PI : Math.atan2( a[1], a[0] );

	let [ n, ...pairs ] = input.split( '\n' );

	pairs = pairs.map( pair => pair.split( ' ' ).map( Number ) );
	pairs.length = n;

	pairs.sort( ( a, b ) => {
		const delta = atan( a ) - atan( b );

		if ( delta !== 0 )
			return delta;
		else
		{
			const distance = Math.hypot( ...a ) - Math.hypot( ...b );

			return distance > 0 ? 1 : ( distance < 0 ? -1 : 0 );
        	}
	} );

	for ( let i = 0; i < n; i++ )
		console.log( pairs[i][0] + ' ' + pairs[i][1] );
}
