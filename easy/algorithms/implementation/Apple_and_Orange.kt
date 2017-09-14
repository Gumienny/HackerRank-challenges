/**
 * 14/09/2017
 * https://www.hackerrank.com/challenges/apple-and-orange/
 */

import java.io.*
import java.util.*

fun main( args: Array<String> )
{
	val ( s, t ) = readLine()!!.split( ' ' ).map { it.toInt() }
	val ( a, b ) = readLine()!!.split( ' ' ).map { it.toInt() }
	val ( m, n ) = readLine()!!.split( ' ' ).map { it.toInt() }

	var total_apples = 0
	var total_oranges = 0

	readLine()!!.split( ' ' ).map { it.toInt() }.forEach {
		if ( ( a + it ) in s .. t )
			total_apples += 1
	}

	readLine()!!.split( ' ' ).map { it.toInt() }.forEach {
		if ( ( b + it ) in s .. t )
			total_oranges += 1
	}

	println( total_apples )
	println( total_oranges )
}
