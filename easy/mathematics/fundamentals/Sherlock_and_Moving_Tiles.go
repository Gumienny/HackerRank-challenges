/**
 * 21/08/2017
 * https://www.hackerrank.com/challenges/sherlock-and-moving-tiles
 */
 
package main
import "fmt"
import "math"

func main() {
	var i, L, S_1, S_2, Q, q, t float64

	fmt.Scan( &L, &S_1, &S_2, &Q )

	for i = 0; i < Q; i++ {
		fmt.Scan( &q )

		t = math.Abs( math.Sqrt2 * ( L - math.Sqrt( q ) ) / ( S_1 - S_2 ) )

		fmt.Println( t )
	}
}
