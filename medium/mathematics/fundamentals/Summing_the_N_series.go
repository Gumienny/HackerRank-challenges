/**
 * 21/08/2017
 * https://www.hackerrank.com/challenges/summing-the-n-series
 */
 
package main
import "fmt"

func main() {
	var i, n, t, m int64
    
	m = 1e9 + 7
    
	fmt.Scan( &t )

	for i = 0; i < t; i++ {
		fmt.Scan( &n )
		fmt.Println( ( ( n % m ) * ( n % m ) ) % m )
	}
}
