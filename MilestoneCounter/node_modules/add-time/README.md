# add-time [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/add-time/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/add-time)

Add time to a date.

[![NPM Badge](https://nodei.co/npm/add-time.png)](https://npmjs.com/package/add-time)

## Install

```sh
npm install add-time
```

## Usage

```js
const addTime = require("add-time");

addTime(date, {
	seconds: 10,
	minutes: 60
})
//=> 2020-08-17T00:28:11.523Z

addTime.now({
	days: 12,
	months: 8
});
//=> 2021-04-28T23:26:53.801Z
```

## API

### addTime(date, options?)

Add time to a date.

### addTime.now(options?)

Add time to the current date.

#### date

Type: `Date | number | string`

The date to add to.

#### options

Type: `object`

##### milliseconds

Type: `integer`\
Default: `0`

The amount of milliseconds to add.

##### seconds

Type: `integer`\
Default: `0`

The amount of seconds to add.

##### minutes

Type: `integer`\
Default: `0`

The amount of minutes to add.

##### hours

Type: `integer`\
Default: `0`

The amount of hours to add.

##### days

Type: `integer`\
Default: `0`

The amount of days to add.

##### weeks

Type: `integer`\
Default: `0`

The amount of weeks to add.

##### fortnights

Type: `integer`\
Default: `0`

The amount of fortnights to add.

##### years

Type: `integer`\
Default: `0`

The amount of years to add.

##### decades

Type: `integer`\
Default: `0`

The amount of decades to add.

##### centuries

Type: `integer`\
Default: `0`

The amount of centuries to add.

##### millennia

Type: `integer`\
Default: `0`

The amount of millennia to add.
