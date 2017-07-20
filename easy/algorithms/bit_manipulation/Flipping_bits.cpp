/**
 * 20/07/2017
 * https://www.hackerrank.com/challenges/flipping-bits
 */
 
#include <iostream>
using namespace std;

int main() {
	int t = 0;
	unsigned int cmpl;

	cin >> t;

	for ( int i = 0; i < t; i++ ) {
		cin >> cmpl;
		cmpl ^= 0xffffffff;
		cout << cmpl << endl;
	}

	return 0;
}
