/**
 * 12/09/2017
 * https://www.hackerrank.com/challenges/equal-stacks/
 */

function main()
{
	const [ n1, n2, n3 ] = readLine().split( ' ' ).map( Number );

	const add = ( a, b ) => a + b;

	const l1 = readLine().split( ' ' ).map( Number ).reverse();
	const l2 = readLine().split( ' ' ).map( Number ).reverse();
	const l3 = readLine().split( ' ' ).map( Number ).reverse();

	let s1 = l1.reduce( add, 0 );
	let s2 = l2.reduce( add, 0 );
	let s3 = l3.reduce( add, 0 );

	while ( !( ( s1 === s2 ) && ( s2 === s3 ) ) )
	{
		if ( s1 > s2 || s1 > s3 ) s1 -= l1.pop();
		if ( s2 > s1 || s2 > s3 ) s2 -= l2.pop();
		if ( s3 > s1 || s3 > s2 ) s3 -= l3.pop();
	}

	console.log( s1 );
}
