/**
 * 01/08/2017
 * https://www.hackerrank.com/challenges/balanced-brackets
 */

function isBalanced( s ) {
	const o = {
		'{': '}',
		'[': ']',
		'(': ')'
	};
	const stack = [];

	for ( let i = 0, len = s.length; i < len; i++ ) {
		let b = s[ i ];

		switch ( b ) {
			case ']':
			case '}':
			case ')':
				if ( b === stack[ stack.length - 1 ] )
					stack.pop();
				else
					return 'NO';
				break;
			default:
				stack.push( o[ b ] );
		}
	}

	return stack.length === 0 ? 'YES' : 'NO';
}
