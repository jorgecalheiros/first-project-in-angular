import { LocalStorage } from './../../shared/types/localstorage';
import { LocalstorageService } from './../../shared/services/localstorage/localstorage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-localstorage-manager',
  templateUrl: './localstorage-manager.component.html',
  styleUrls: ['./localstorage-manager.component.css'],
  providers: [LocalstorageService],
})
export class LocalstorageManagerComponent {
  key: string = '';
  data: string = '';
  listData: LocalStorage[] = [];

  constructor(private service: LocalstorageService) {
    this.getAllKeys();
  }

  create() {
    this.service.setData(this.key, this.data);
    this.getAllKeys();
  }

  getAllKeys() {
    this.listData = this.service.getAllKeys();
  }

  deleteKey(key: string) {
    this.service.deleteKey(key);
    this.getAllKeys();
  }
  updateData(values: { key: string; data: string }) {
    this.service.setData(values.key, values.data);
    this.getAllKeys();
  }
}
