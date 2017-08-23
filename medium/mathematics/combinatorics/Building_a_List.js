/**
 * 23/08/2017
 * https://www.hackerrank.com/challenges/building-a-list
 */
 
function processData( input )
{
	const data = input.split( '\n' );
	const T = Number( data[ 0 ] );

	for ( let t = 1; t <= T; t++ )
	{
		let index = 0;
		let output = [];
		const chars = data[ 2 * t ].split( '' ).sort();
		const subsets = Math.pow( 2, Number( data[ 2 * t - 1 ] ) ) - 1;

		for ( let i = 1; i <= subsets; i++ )
		{
			const bits_length = Math.floor( Math.log2( i ) );

			output[ index ] = '';

			for ( let j = 0; j <= bits_length; j++ )
				if ( ( i >> j ) & 1 )
					output[ index ] += chars[ j ];

			index++;
		}

		console.log( output.sort().join( '\n' ) );
	}
} 
