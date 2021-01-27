declare namespace addTime {
	export interface Options {
		/**
		The amount of milliseconds to add.
		*/
		millseconds: number

		/**
		The amount of seconds to add.
		*/
		seconds: number

		/**
		The amount of minutes to add.
		*/
		minutes: number

		/**
		The amount of hours to add.
		*/
		hours: number

		/**
		The amount of days to add.
		*/
		days: number

		/**
		The amount of weeks to add.
		*/
		weeks: number

		/**
		The amount of fortnights to add.
		*/
		fortnights: number

		/**
		The amount of years to add.
		*/
		years: number

		/**
		The amount of decades to add.
		*/
		decades: number

		/**
		The amount of centuries to add.
		*/
		centuries: number

		/**
		The amount of millennia to add.
		*/
		millennia: number
	}
}

declare const addTime: {
	/**
	Add time to a date.
	@param date The date to add to.
	@example
	```
	const addTime = require("add-time");

	addTime(date, {
		seconds: 10,
		minutes: 60
	})
	//=> 2020-08-17T00:28:11.523Z
	*/
	(date: Date | number | string, options?: addTime.Options): Date

	/**
	Add time to the current date.
	@example
	```
	const addTime = require("add-time");

	addTime.now({
		days: 12,
		months: 8
	});
	//=> 2021-04-28T23:26:53.801Z
	*/
	now(options?: addTime.Options): Date
}

export = addTime
