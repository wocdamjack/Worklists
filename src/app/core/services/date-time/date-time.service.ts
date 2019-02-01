import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({ providedIn: 'root' })
export class DateTimeService {

  /**
   * Returns current datetime in 'YYYY-MM-DD hh:mm:ss A' format
   * @param {boolean} returnAsUtc A flag to determine if the return value should be utc or local
   */
  public now(returnAsUtc?: boolean, format?: string): string {
    const fmt = format || 'YYYY-MM-DD hh:mm:ss A';
    if (returnAsUtc) {
      return moment().utc().format(fmt);
    }

    return moment().format(fmt);
  }

  public getDateFromTodayInDays(daysFromToday: number, returnAsUtc?: boolean, format?: string): string {
    const fmt = format || 'YYYY-MM-DD hh:mm:ss A';
    const date = moment().add(daysFromToday, 'days');
    if (returnAsUtc) {
      return date.utc().format(fmt);
    }

    return date.format(fmt);
  }

  public getFirstDayOfCurrentMonth(returnAsUtc?: boolean, format?: string): string {
    const fmt = format || 'YYYY-MM-DD hh:mm:ss A';
    const current = new Date(), year = current.getFullYear(), month = current.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const date = moment(firstDayOfMonth.toUTCString());
    if (returnAsUtc) {
      return date.utc().format(fmt);
    }

    return date.format(fmt);
  }

  public getStartOfCurrentHour(returnAsUtc?: boolean, format?: string): string {
    const fmt = format || 'YYYY-MM-DD hh:mm:ss A';
    const current = new Date(), year = current.getFullYear(), month = current.getMonth(), day = current.getDate(), hour = current.getHours();
    const theHour = new Date(year, month, day, hour, 0, 0, 0);
    const date = moment(theHour.toUTCString());
    if (returnAsUtc) {
      return date.utc().format(fmt);
    }

    return date.format(fmt);
  }

  public getEndOfCurrentHour(returnAsUtc?: boolean, format?: string): string {
    const fmt = format || 'YYYY-MM-DD hh:mm:ss A';
    const current = new Date(), year = current.getFullYear(), month = current.getMonth(), day = current.getDate(), hour = current.getHours();
    const theHour = new Date(year, month, day, hour+1, 0, 0, 0);
    const date = moment(theHour.toUTCString());
    if (returnAsUtc) {
      return date.utc().format(fmt);
    }

    return date.format(fmt);
  }
}
