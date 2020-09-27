import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MyStorageService {
    public localStorage: any;

    constructor() {
        if (!localStorage) {
            throw new Error('当前浏览器不支持本地存储');
        }
        this.localStorage = localStorage;
    }



    get storKey() {
        return {
          PARTRNER:'PARTNER',
          ZONE_INFO:'ZONE_INFO',
          USER_INFO:'USER_INFO',
        //   expire_time:'expire_time'
        };
      }



    public set(key: string, value: string): void {
        this.localStorage[key] = value;
    }

    public get(key: string): string {
        return this.localStorage[key] || false;
    }

    public setObject(key: string, value: any): void {
        this.localStorage[key] = JSON.stringify(value);
    }

    public getObject(key: string): any {
        return JSON.parse(this.localStorage[key] || '{}');
    }

    public remove(key: string): any {
        this.localStorage.removeItem(key);
    }

    public clearAll() {
        this.localStorage.clear();
    }
}
