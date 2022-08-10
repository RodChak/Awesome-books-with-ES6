import { DateTime } from './luxon.min.js';
// to display date
export default class X {
  static displayDate() {
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    return date;
  }
}

// export default displayDate;