import { LocalStorage } from './../../../../shared/types/localstorage';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-localstorage',
  templateUrl: './list-localstorage.component.html',
  styleUrls: ['./list-localstorage.component.css'],
})
export class ListLocalstorageComponent {
  @Input() list: LocalStorage[] = [];
  @Output() deleteButton = new EventEmitter<string>();
  @Output() updateButton = new EventEmitter<{ key: string; data: string }>();

  destroy(key: string | null) {
    if (key) this.deleteButton.emit(key);
  }
  update(key: string | null, data: string) {
    if (key) this.updateButton.emit({ key, data });
    alert('Alterado!');
  }
}
