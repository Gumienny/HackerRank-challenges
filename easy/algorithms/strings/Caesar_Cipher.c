/**
 * 22/04/2017
 * https://www.hackerrank.com/challenges/caesar-cipher-1
 */
#include <stdio.h>
#include <stdlib.h>

int main() {
	int n; 
	scanf( "%d", &n );

	char* s = ( char * )malloc( ( n + 1 ) * sizeof( char ) );
	scanf( "%s", s );
    
	int k;
	scanf( "%d", &k );

	int i;
	char x;

	for ( i = 0; i < n; i++ )
		if ( ( s[i] >= 'a' && s[i] <= 'z' && ( x = 'a' ) ) || ( s[i] >= 'A' && s[i] <= 'Z' && ( x = 'A' ) ) )
			s[i] = (char)( ( s[i] % x + k ) % 26 + x );

	printf( "%s", s );

	return 0;
}
