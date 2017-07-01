/*
 * 01/07/2017
 * https://www.hackerrank.com/challenges/leonardo-and-prime/problem
 *
 * To slow in three cases :/
 */

package main

import (
	"fmt"
	"bufio"
	"os"
)

func main() {
	var j int;
	var i, q uint32;
	var n uint64;

	primorial := [16]uint64{ 2, 6, 30, 210, 2310, 30030, 510510, 9699690, 223092870, 6469693230, 200560490130, 7420738134810, 304250263527210, 13082761331670030, 614889782588491410 }

	fmt.Scan( &q );

	in := bufio.NewReader( os.Stdin )

	for i = 0; i < q; i++ {
		j = 0

		fmt.Fscan( in, &n )

		for n >= primorial[ j ] {
			j = j + 1
		}

		fmt.Println( j )
    }
}
