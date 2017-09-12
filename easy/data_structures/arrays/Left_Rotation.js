/**
 * 12/09/2017
 * https://www.hackerrank.com/challenges/array-left-rotation/
 */

function leftRotation( a, d ) {
	// return [ ...a.slice( d, a.length ), ...a.slice( 0, d ) ]
	return a.slice( d, a.length ).concat( a.slice( 0, d ) )
}
