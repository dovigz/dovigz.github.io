"use strict"

module.exports = (date, {
	milliseconds = 0,
	seconds = 0,
	minutes = 0,
	hours = 0,
	days = 0,
	weeks = 0,
	fortnights = 0,
	months = 0,
	years = 0,
	decades = 0,
	centuries = 0,
	millennia = 0
} = {}) => {
	date = new Date(date instanceof Date ? date.getTime() : date)

	date.setMilliseconds(date.getMilliseconds() + milliseconds)
	date.setSeconds(date.getSeconds() + seconds)
	date.setMinutes(date.getMinutes() + minutes)
	date.setHours(date.getHours() + hours)
	date.setDate(date.getDate() +
		days +
		(weeks * 7) +
		(fortnights * 14)
	)
	date.setMonth(date.getMonth() + months)
	date.setFullYear(date.getFullYear() +
		years +
		(decades * 10) +
		(centuries * 100) +
		(millennia * 1000)
	)

	return date
}

module.exports.now = options => module.exports(new Date(), options)
