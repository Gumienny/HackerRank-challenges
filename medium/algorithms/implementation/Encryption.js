/**
 * 25/08/2017
 * https://www.hackerrank.com/challenges/encryption
 */
 
function main() {
	const s = readLine();
	const l = s.length;
	const c = Math.ceil( Math.sqrt( l ) );
	const r = Math.floor( Math.sqrt( l ) );
	const t = Array( c ).fill( '' );

	for ( let i = 0; i < l; i++ )
		t[i % c] += s[i] || '';

	console.log( t.join( ' ' ) );
}
