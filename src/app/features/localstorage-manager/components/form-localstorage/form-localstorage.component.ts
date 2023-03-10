import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-localstorage',
  templateUrl: './form-localstorage.component.html',
  styleUrls: ['./form-localstorage.component.css'],
})
export class FormLocalstorageComponent {
  @Input() inputValue: string = '';
  @Output() inputValueChange = new EventEmitter<string>();

  @Input() textValue: string = '';
  @Output() textValueChange = new EventEmitter<string>();

  @Output() buttonCreate = new EventEmitter();

  setValueInput(value: string) {
    this.inputValue = value;
    this.inputValueChange.emit(this.inputValue);
  }

  setValueText(value: string) {
    this.textValue = value;
    this.textValueChange.emit(this.textValue);
  }

  create() {
    if (
      this.inputValue.trim() == '' ||
      this.inputValue == '' ||
      this.textValue.trim() == '' ||
      this.textValue == ''
    ) {
      alert('Preecha os campos corretamente');
    } else {
      this.buttonCreate.emit();
      this.setValueInput('');
      this.setValueText('');
    }
  }
}
