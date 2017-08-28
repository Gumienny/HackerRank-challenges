/**
 * 28/08/2017
 * https://www.hackerrank.com/challenges/bigger-is-greater/
 */
 
function processData( input )
{
	const fail = 'no answer';
	let [ n, ...data ] = input.split( '\n' );

	data.forEach( word => {
		if ( word.length !== 1 )
		{
			let X = word.length - 2;
			let Y = word.length - 1;

			word = word.split( '' );

			for ( let char_position = X; char_position >= 0; char_position-- )
			{
				if ( word[char_position] !== word[char_position + 1] )
				{
					while ( word[X] >= word[X + 1] && X >= 0 )
						X--;

					if ( X === -1 )
					{
						console.log( fail );
						break;
					}

					while ( word[Y] <= word[X] && Y >= 0 )
						Y--;
                
					[ word[X], word[Y] ] = [ word[Y], word[X] ];
                
					console.log( [ ...word.slice( 0, X + 1 ), ...word.slice( X + 1 ).reverse() ].join( '' ) );
                
					break;
				}
				else if ( char_position === 0 )
				{
					console.log( fail );
				}
			}
		} 
		else
		{
			console.log( fail );
		}
	} );
}
