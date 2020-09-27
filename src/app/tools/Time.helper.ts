export class TimeHelper {
  /**
   * date对象转时间戳
   * @param date
   */
  public static getTimestamp(date = new Date()): number {
    return date.getTime();
  }

  /***
   * 时间戳转date对象
   */
  public static timestampToDate(timestamp: number): Date {
    let resDate = new Date();
    resDate.setTime(timestamp);
    return resDate;
  }

  /***
   * 获取两个Date对象间隔的时间
   */
  public static getBetweenNum(
    startDate: Date,
    endDate: Date,
    type: string = "year"
  ): number {
    switch (type) {
      case "year":
        return Math.abs(startDate.getFullYear() - endDate.getFullYear());
      case "month":
        return Math.abs(
          (endDate.getFullYear() - startDate.getFullYear()) * 12 +
            endDate.getMonth() -
            startDate.getMonth()
        );
      case "day":
        return Math.floor(
          (this.getTimestamp(endDate) - this.getTimestamp(startDate)) /
            24 /
            60 /
            60 /
            1000
        );
      case "hours":
        return Math.floor(
          (this.getTimestamp(endDate) - this.getTimestamp(startDate)) /
            60 /
            60 /
            1000
        );
      case "minutes":
        return Math.floor(
          (this.getTimestamp(endDate) - this.getTimestamp(startDate)) /
            60 /
            1000
        );
      case "seconds":
      default:
        return Math.floor(
          (this.getTimestamp(endDate) - this.getTimestamp(startDate)) / 1000
        );
    }
  }

  /***
   * 获取间隔时间的时间戳
   * TimeHelper.getLaterTimestamp((new Date()).getTime(), 10, 'year') 即 获取10年后的字符串
   */
  public static getLaterTimestamp(
    timestamp: number,
    betweenNum: number,
    type: string
  ): number {
    let beginDate = new Date();
    beginDate.setTime(timestamp);
    switch (type) {
      case "year":
        beginDate.setFullYear(beginDate.getFullYear() + betweenNum);
        break;
      case "month":
        beginDate.setMonth(beginDate.getMonth() + betweenNum);
        break;
      case "day":
        beginDate.setDate(beginDate.getDate() + betweenNum);
        break;
      case "hour":
        beginDate.setHours(beginDate.getDate() + betweenNum);
        break;
      case "minute":
        beginDate.setMinutes(beginDate.getDate() + betweenNum);
        break;
      case "second":
        beginDate.setSeconds(beginDate.getDate() + betweenNum);
        break;
      default:
        break;
    }
    return beginDate.getTime();
  }

  /***
   * 时间戳 转 时间字符串
   * @param {string} timestamp : 时间戳
   * @returns {string} : 时间字符串
   */
  public static timestampToString(
    timestamp: number,
    zh: boolean = false
  ): string {
    let date = new Date();
    date.setTime(timestamp);
    let Y = date.getFullYear();
    let M =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    if (zh) {
      return Y + "年" + M + "月" + D + "日";
    } else {
      return Y + "-" + M + "-" + D;
    }
  }

  /***
   * 获取当前时间的字符串
   * @returns {string}
   */
  public static curTimeSting(): string {
    let date = new Date();
    let Y = date.getFullYear();
    let M =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return Y + "-" + M + "-" + D;
  }

  /***
   * 时间字符串 转 时间戳
   * @param timeString:时间字符串
   * @returns {string}:时间戳
   */
  public static stringToTimestamp(timeString: string): number {
    //return Date.parse(timeString);
    return Date.parse(timeString + 'GMT+8');
  }
}
