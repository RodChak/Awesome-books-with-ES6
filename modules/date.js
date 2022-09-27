import { DateTime } from './luxon.min.js';
// to display date
const displayDate = () => {
  const date = DateTime.now();
  document.getElementById('current-time').innerHTML = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default displayDate;