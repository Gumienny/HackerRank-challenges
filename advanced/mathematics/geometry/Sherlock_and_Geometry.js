/**
 * 25/09/2017
 * https://www.hackerrank.com/challenges/sherlock-and-geometry/
 */

function processData( input )
{
	const [ T, ...data ] = input.split( '\n' );

	next: for ( let t = 0; t < T; t++ )
	{
		const [ xc, yc, R, x1, y1, x2, y2, x3, y3 ] = [ ...data[4 * t].split( ' ' ), ...data[4 * t + 1].split( ' ' ), ...data[4 * t + 2].split( ' ' ), ...data[4 * t + 3].split( ' ' ) ].map( Number );
		
		const points = [
			[ x1 - xc, y1 - yc, Math.hypot( x1 - xc, y1 - yc ) ],
			[ x2 - xc, y2 - yc, Math.hypot( x2 - xc, y2 - yc ) ],
			[ x3 - xc, y3 - yc, Math.hypot( x3 - xc, y3 - yc ) ]
		];

		if (
			Math.min( points[0][2], points[1][2], points[2][2] ) <= R + 0.001 
			&&
			Math.max( points[0][2], points[1][2], points[2][2] ) >= R - 0.001 
		)
		{
			console.log( 'YES' );
			continue next;
		}

		for ( let i = 0; i < 3; i++ )
		{
			const p1 = points[i];
			const p2 = points[(i + 1) % 3];

			if ( p1[2] > R && p2[2] > R )
			{
				let distance;

				if ( p1[0] !== p2[0] )
				{
					const slope = ( p2[1] - p1[1] ) / ( p2[0] - p1[0] );
					const c = p1[1] - slope * p1[0];

					distance = Math.abs( c ) / Math.sqrt( slope * slope + 1 );
				} 
				else
				{
					distance = Math.abs( p1[0] );
				}

				if ( distance <= R )
				{
					const v = [
						p1[0] - p2[0], 
						p1[1] - p2[1]
					];

					// dot product (opposite signs)
					if (
						( v[0] * p1[0] + v[1] * p1[1] ) > 0
						!==
						( v[0] * p2[0] + v[1] * p2[1] ) > 0
					)
					{
						console.log( 'YES' );
						continue next;
					}
				}
			}
		}

		console.log( 'NO' );
	}
}
