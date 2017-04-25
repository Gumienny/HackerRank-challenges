/**
 * 25/04/2017
 * https://www.hackerrank.com/challenges/hackerrank-in-a-string
 */
#include <stdio.h>
#include <stdlib.h>

int main()
{
	int q;
	scanf( "%d", &q );

	char h[] = "hackerrank";

	int a0 = 0;
	int i, j;

	for ( a0 = 0; a0 < q; a0++ )
	{
		i = 0;
		j = 0;
		char *s = ( char * )malloc( 10000 * sizeof( char ) );

		scanf( "%s", s );

		while ( s[i] != '\0' )
		{
			if ( s[i] == h[j] )
			{
				j++;

				if ( h[j] == '\0' )
				{
					printf( "YES\n" );
					break;
				}
			}

			i++;
		}

		if ( h[j] != '\0' )
			printf( "NO\n" );
    }

    return 0;
}
