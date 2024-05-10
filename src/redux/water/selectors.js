export function selectDayWater(state) {
  return state.water.dayWater;
}

export function selectMonthWater(state) {
  return state.water.monthWater;
}

export function selectDay(state) {
  return state.water.day;
}

export function selectMonth(state) {
  return state.water.month;
}

export function selectWaterLoading(state) {
  return state.auth.loading;
}

export function selectWaterError(state) {
  return state.auth.error;
}
