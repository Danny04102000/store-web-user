import { endOfYear, format, parseISO, startOfYear } from "date-fns";

function getURLParam(key, _default = "") {
  const href = window.location.href;
  const url = new URL(href);
  const paramValue = url.searchParams.get(key) || _default;
  return paramValue.replace(/ /g, "+");
}

function formatDate(date, formatted = "yyyy-MM-dd HH:mm:ss") {
  return date ? format(parseISO(date), formatted) : "";
}

function formatNoParseISO(date, formatted = "yyyy-MM-dd") {
  return format(new Date(date), formatted);
}

function maxDateOfYear(year) {
  return endOfYear(new Date(year, 11, 31));
}

function minDateOfYear(year) {
  return startOfYear(new Date(year, 0, 1));
}

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(Number(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

function formatMoney(value) {
  return Number(value).toLocaleString();
}

function formatTypeofValue(value, type, callback) {
  if ([null, undefined, ""].includes(value)) {
    return callback(value);
  } else {
    switch (type) {
      case "string":
        value = value.toString();
        break;
      case "number":
        value = +value;
        break;
      default:
        // eslint-disable-next-line no-self-assign
        value = value;
    }
  }

  if (typeof value === type) {
    return callback(value);
  }

  throw new Error(
    `Expected data type of ${value} to be ${type} but received as ${typeof value}`
  );
}

function convertObj(inputObj) {
  const result = [];

  for (const key in inputObj) {
    if (Object.hasOwnProperty.call(inputObj, key)) {
      result.push({
        value: +key,
        label: inputObj[key],
      });
    }
  }

  return result;
}

export {
  convertObj,
  formatDate,
  formatMoney,
  formatNoParseISO,
  formatTypeofValue,
  getURLParam,
  isNumeric,
  maxDateOfYear,
  minDateOfYear,
};
