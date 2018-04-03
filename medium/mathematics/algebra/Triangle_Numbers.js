/**
 * 03/04/2018
 * https://www.hackerrank.com/challenges/triangle-numbers/
 */

function processData(input) {
	const data = input.split('\n').map(i => parseInt(i));
	const [T, ...N] = data;
	let ans;

	for (let i = 0; i < T; i++) {
		let n = N[i];

		if ((n % 2 == 1) && n >= 3) {
			ans = 2;
		} else if (n % 4 == 0) {
			ans = 3;
		} else if (n <= 2) {
			ans = -1;
		} else {
			ans = 4;
		}
		console.log(ans);
	}
}
