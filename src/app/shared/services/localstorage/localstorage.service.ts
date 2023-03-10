import { LocalStorage } from './../../types/localstorage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  getAllKeys(): LocalStorage[] {
    const list: LocalStorage[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      list.push({
        key: localStorage.key(i),
        data: localStorage.getItem(localStorage.key(i) ?? ''),
      });
    }
    return list;
  }

  setData(key: string, data: string) {
    if (key) {
      localStorage.setItem(key, data);
    }
  }

  deleteKey(key: string) {
    if (key) {
      localStorage.removeItem(key);
    }
  }
}
