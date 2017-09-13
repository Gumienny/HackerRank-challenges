/**
 * 13/09/2017
 * https://www.hackerrank.com/challenges/a-very-big-sum/
 */

import java.io.*
import java.util.*

fun main( args: Array<String> )
{
	val n = readLine()!!.toInt()

	println( readLine()!!.split( ' ' ).map { it.toLong() }.sum() )
}
