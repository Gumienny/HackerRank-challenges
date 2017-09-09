/**
 * 09/09/2017
 * https://www.hackerrank.com/challenges/big-sorting/
 */
 
function main()
{
	const n = parseInt( readLine() );
	const unsorted = [];

	for( let i = 0; i < n; i++ )
		unsorted[i] = readLine();

	const sorted = unsorted.sort( ( a, b ) => {
		if ( a.length === b.length )
		{
			if ( a < b )
				return -1;
			else if ( a > b )
				return 1;
			else
				return 0;
		}
		else
			return a.length - b.length;
	} );

	console.log( sorted.join( '\n' ) );
}
