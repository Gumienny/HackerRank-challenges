/**
 * 22/08/2017
 * https://www.hackerrank.com/challenges/sherlock-and-permutations
 *
 * 2/6 testcases
 */
 
package main
import "fmt"

func main() {
	var i, t, j, n, m, out, k uint64

	fmt.Scan( &t )

	for i = 0; i < t; i++ {
		fmt.Scan( &n, &m )

		out = 1;
		k = 1
		j = n + m - 1
        
		for (( j >= n + 1 ) || ( k <= m - 1 )) {
			if ( j >= n + 1 ) {
				out *= j
			}

			if ( k <= m-1 ) {
				out /= k
			}

			k++
			j--
		}

		fmt.Println( out % ( 1e9 + 7 ) )
	}
}

/* improvements needed
99
522 575
426 445
772 81
447 629
497 202
775 325
982 784
417 156
932 902
728 537
857 739
918 211
679 506
340 568
868 16

455304470
97635354
446215095
465144075
182265410
585709451
729480572
708527135
67591250
260857692
865562650
710988362
631407492
321651730
274988248
*/
