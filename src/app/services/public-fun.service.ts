import { Injectable } from '@angular/core';
// import { Helper } from '../api/helper.tool';


@Injectable()
export class PublicFunService {

  constructor() { }
  /**
   * 判断arr1是否包含arr2，这种数组里面非对象可以直接使用，如果是对象则不能用此方法
   * @param arr1 =[1,2,3,4,5]
   * @param arr2 =[2,4]
   */

  isContain(arr1: any[] = [], arr2: any[] = []) {
    return arr2.every(val => arr1.includes(val))
  }
  // 判断特定集合是否相等

  isSameArr(a: any[], b: any[]) {
    const booArr = []
    a.forEach(item => {
      booArr.push(b.some(sub => item.id == sub.id && sub.text == item.text))
    });
    return booArr.every(item => item == true);

  }
  // 两个对象是否相等,并非集合
  isObjectValueEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
      return false;
    }
    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i]
      var propA = a[propName]
      var propB = b[propName]
      if ((typeof (propA) === 'object')) {
        if (this.isObjectValueEqual(propA, propB)) {
          // return true     这里不能return ,后面的对象还没判断
        } else {
          return false
        }
      } else if (propA !== propB) {
        return false
      } else { }
    }
    return true




  }
  //{id:string;text:string}冒泡 排序
  bubbleSort(arr: { id: string; text: string }[]) {
    if (Array.isArray(arr)) {
      for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
          if (arr[j].id > arr[j + 1].id) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      return arr;
    }
  }

  /**筛选出含有相同id的元素 */

  screenOutArr(arr: any[], arr2: any[], jfqx: boolean = false) {
    // 
    // const test = [{ id: 1, text: 'a' }, { id: 2, text: 'b' }, { id: 3, text: 'c' }];
    // const test2 = [{ id: 1, text: 'a2' }, { id: 2, text: 'b2' }, { id: 3, text: 'c2' }, { id: 4, text: 'd2' }, { id: 5, text: 'e2' }];
    const basket = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      for (let j = 0, jlen = arr2.length; j < jlen; j++) {

        if (arr2[j].id == arr[i].id) {
          basket.push(arr2[j])
        }

      }
    }
    return basket;
  }



  hasChange(screenNews: any, oldData: any, jfqx: boolean = false) {
    let hasChange: boolean = false;
    const basket = []
    screenNews.forEach(item => {
      oldData.forEach(sub => {
        basket.push(!(item.id == sub.id && this.timestampToString(item.text) == this.timestampToString(sub.text)))
        if (item.id == sub.id) {
          if (jfqx) {
            basket.push(this.timestampToString(item.text) != this.timestampToString(sub.text))
          } else {
            basket.push(item.text != sub.text)
          }

        }
      })
    })
    hasChange = basket.some(el => { return el === true });
    return hasChange
  }

  timestampToString(timestamp: number | string, zh: boolean = false): string {
    if (timestamp) {
      let date = new Date(parseInt(timestamp + ''));
      let Y = date.getFullYear();
      let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      if (zh) {
        return Y + '年' + M + '月' + D + '日';
      } else {
        return Y + '-' + M + '-' + D;
      }
    }
  }

}
