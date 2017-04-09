/**
 * 07.04.2017
 * https://www.hackerrank.com/challenges/2d-array
 */
function main() {
	let sum;
	let max = -1 * Number.MAX_VALUE;

	for ( var i=0; i < 4; i++ )
	{
		for ( var j=0; j < 4; j++ )
		{
			sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

			if ( sum > max )
				max = sum;
		}
	}

	console.log( max );
}
