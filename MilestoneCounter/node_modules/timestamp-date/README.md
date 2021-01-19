# TimestampDate

TimestampDate is a simple date-timestamp tool provided by [Anchor Solutions](https://www.anchorsolutions.nl) to convert dates, string dates and timestamps in JavaScript objects to/from JS Date object. It can recursively parse the object document tree presented to locate each timestamp or date values and then convert to the expected type.

## Installation
Install timestamp-date via npm by running the following command: 
> `npm install timestamp-date --save`

## Usage
Create and instance and call available methods from the instance created.

 ```typescript
import { TimestampDate } from 'timestamp-date';

const timestampDate = new TimestampDate();
 ``` 

### Use `TimestampDate` utilities functions
```typescript
// converts all timestamp in doc to js date
const doc = {
  a: {},
  b: {
    c: [
      d: <Timestamp>
    ],
    e: <Timestamp>
  }
};

const updated = this.timestampService.parseTimestampToDate(doc);

console.log(doc, updated);
```

### Methods
| Method Name | Params  | Return type | Description                                        |
|-------------|---------|-------------|----------------------------------------------------|
| getServerTimestamp     |           | Timestamp      | Gets current timestamp value representative from firebase.|
|getServerDate||Date|Gets current date value from firebase|
| timestampToDate        | Timestamp  | Date           | Converts timestamp object to date object |
| dateToTimestamp        | Date  | Timestamp        | Converts JS date object to timestamp                      |
| parseTimestampToDate<T, R>    | <T> | <R>       | Recursively iterates through properties of a JS object and converts all occurences of timestamp to normal JS Date|
| parseDateToTimestamp<T, R>    | <T> | <R>       | Recursively iterates through properties of a JS object and converts all occurences of JS Date to timestamp object|
| parseStringToDate<T, R>    | <T> | <R>       | Recursively iterates through properties of a JS object and converts all occurences of valid date string values to JavaScript Date objects|
| parseDateToString<T, R>    | <T> | <R>       | Recursively iterates through properties of a JS object and converts all occurences of JS Date to date strings types.|

### Further Reading
Have a look at other packages by [Anchor Solutions](https://www.anchorsolutions.nl):
- [Pincode](https://www.npmjs.com/package/pincode)
- [translator-client-module](https://www.npmjs.com/package/translator-client-module)
- [MatModal](https://www.npmjs.com/package/mat-modal)
