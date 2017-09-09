/**
 * 09/09/2017
 * https://www.hackerrank.com/challenges/matrix-rotation-algo/
 */

/*
	layer = 1    layer = 2
	1  2  3  4   -  -  -  -
	12 -  -  5   -  1  2  -
	11 -  -  6   -  4  3  -
	10 9  8  7   -  -  -  -

	layer = 1 (matrix[y][x]):
	indexes for x:    indexes for y:
	3 |   ....        3 |      ....    ___ max
	2 |  .    .       2 |     .    .
	1 | .      .      1 |    .      .
	0 |.        ...   0 |....          ___ min
*/

function processData( input )
{
	let [ params, ...matrix ] = input.split( '\n' );
	const [ M, N, R ] = params.split( ' ' ).map( Number );
	const mapped = [];

	matrix = matrix.map( row => row.split( ' ' ) );

	const loop = function ( modify = false ) {
		let c0 = 0, c1 = N - 1, r0 = 0, r1 = M - 1;

		for ( layer = 0; layer < Math.min( M, N ) / 2; layer++ ) {
			let len = 2 * ( Math.abs( c0 - c1 ) + Math.abs( r0 - r1 ) );
			let topX = ( c1 - c0 + 1 ) - 1 + ( r1 - r0 + 1 ) / 2 + 0.5 - 1;
			let topY = 1.5 * ( c1 - c0 + 1 ) + ( r1 - r0 + 1 ) - 2 - 0.5 - ( c1 - c0 );
			let startX = -1 * topX;
			let startY = -1 * topY - ( c1 - c0 );
			let array = [];

			for ( let j = 0; j < len; j++ )
			{
				let x, y;

				x = c0 + Math.max( 0, Math.min( c1 - c0, topX - Math.abs( startX ) ) );
				y = r0 + Math.max( 0, Math.min( r1 - r0, topY - Math.abs( startY ) ) );

				if ( modify )
					matrix[y][x] = mapped[layer][j]

				if ( !modify )
					array.push( matrix[y][x] )

				startX++;
				startY++;
			}

			if ( !modify ) {
				array = [ ...array.slice( R % len ), ...array.slice( 0, R % len ) ];
				mapped.push( array )
			}

			     r0++;
			c0++;     c1--;
			     r1--;
		}   
	}

	loop();
	loop( true );

	matrix.forEach( row => console.log( row.join( ' ' ) ) )
} 
