/**
 * 25/04/2017
 * https://www.hackerrank.com/challenges/pangrams
 */
#include <stdio.h>
#include <stdlib.h>

int main()
{
	int alphabet_indexes[33] = {0}; // 0-25: alphanumeric; 32: space
	int i = 0;
	int isNot = 0;

	char *str = (char *)malloc( 1000 * sizeof( char ) );
	char s;

	gets( str );

	while( ( s = str[ i++ ] ) != '\0' )
		alphabet_indexes[ ( int )s % 97 % 65 ]++; // a-z: 97-122; A-Z: 65-90

	i = -1;

	while ( ++i < 26 )
		if ( alphabet_indexes[ i ] == 0 )
		{
			isNot = 1;
			break;
		}

	printf( "%spangram\n", isNot == 1 ? "not " : "" );

    return 0;
}
