/**
 * 22.04.2017
 * https://www.hackerrank.com/challenges/camelcase
 */
#include <stdio.h>
#include <stdlib.h>

int main() {
	char * s;

	s = ( char * )malloc( 100000 * sizeof( char ) );

	scanf( "%s", s );

	int c = 1;
	int i = 0;

	while( *(s + i++) != '\0' )
		if ( *(s + i) >= 'A' && *(s + i) <= 'Z' )
			c++;

	free( s );
	printf( "%d", c );

	return 0;
}
