import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-api',
  templateUrl: './input-api.component.html',
  styleUrls: ['./input-api.component.css'],
})
export class InputApiComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() resquestApi = new EventEmitter();

  setValue(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
    this.resquestApi.emit();
  }
}
