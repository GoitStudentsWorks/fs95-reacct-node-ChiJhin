export function DayToString(date) {
  let day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  return day + '.' + MonthToString(date);
}

export function MonthToString(date) {
  const year = date.getFullYear();
  let month = date.getMonth();
  if (month < 10) {
    month = '0' + month;
  }
  return month + '.' + year;
}

export function TimeToString(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return hours + ':' + minutes;
}

export function DateToStr(date) {
  const month = date.split('.')[1];
  let strDate = date.split('.')[0] + ', ';
  switch (month) {
    case '00':
      strDate = strDate + 'January';
      break;
    case '01':
      strDate = strDate + 'February';
      break;
    case '02':
      strDate = strDate + 'March';
      break;
    case '03':
      strDate = strDate + 'April';
      break;
    case '04':
      strDate = strDate + 'May';
      break;
    case '05':
      strDate = strDate + 'June';
      break;
    case '06':
      strDate = strDate + 'July';
      break;
    case '07':
      strDate = strDate + 'August';
      break;
    case '08':
      strDate = strDate + 'September';
      break;
    case '09':
      strDate = strDate + 'October';
      break;
    case '10':
      strDate = strDate + 'November';
      break;

    default:
      strDate = strDate + 'December';
      break;
  }
  return strDate;
}

export function MonthToStr(date) {
  const month = date.split('.')[0];
  let strDate = '';
  switch (month) {
    case '00':
      strDate = strDate + 'January';
      break;
    case '01':
      strDate = strDate + 'February';
      break;
    case '02':
      strDate = strDate + 'March';
      break;
    case '03':
      strDate = strDate + 'April';
      break;
    case '04':
      strDate = strDate + 'May';
      break;
    case '05':
      strDate = strDate + 'June';
      break;
    case '06':
      strDate = strDate + 'July';
      break;
    case '07':
      strDate = strDate + 'August';
      break;
    case '08':
      strDate = strDate + 'September';
      break;
    case '09':
      strDate = strDate + 'October';
      break;
    case '10':
      strDate = strDate + 'November';
      break;

    default:
      strDate = strDate + 'December';
      break;
  }
  return strDate;
}

export function MonthToStrWithYear(date) {
  const month = date.split('.')[0];
  const year = date.split('.')[1];
  let strDate = '';
  switch (month) {
    case '00':
      strDate = strDate + 'January';
      break;
    case '01':
      strDate = strDate + 'February';
      break;
    case '02':
      strDate = strDate + 'March';
      break;
    case '03':
      strDate = strDate + 'April';
      break;
    case '04':
      strDate = strDate + 'May';
      break;
    case '05':
      strDate = strDate + 'June';
      break;
    case '06':
      strDate = strDate + 'July';
      break;
    case '07':
      strDate = strDate + 'August';
      break;
    case '08':
      strDate = strDate + 'September';
      break;
    case '09':
      strDate = strDate + 'October';
      break;
    case '10':
      strDate = strDate + 'November';
      break;

    default:
      strDate = strDate + 'December';
      break;
  }
  return strDate + ', ' + year;
}
