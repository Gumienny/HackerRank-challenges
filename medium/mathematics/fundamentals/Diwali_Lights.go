/**
 * 24/08/2017
 * https://www.hackerrank.com/challenges/diwali-lights
 */
 
package main
import "fmt"

func main() {
	var t, n, a int

	fmt.Scan( &t )

	for i := 0; i < t; i++ {
		a = 1
		fmt.Scan( &n );

		for j := 0; j < n; j++ {
			a *= 2
			a %= 1e5
		}

		fmt.Println( a - 1 )
	}
}
