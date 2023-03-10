import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-buscar-cep',
  templateUrl: './input-buscar-cep.component.html',
  styleUrls: ['./input-buscar-cep.component.css'],
})
export class InputBuscarCepComponent {
  @Output() newEvent = new EventEmitter<number>();

  setValueInput(value: string) {
    if (
      value.trim() == '' ||
      value == '' ||
      value.length < 8 ||
      value.length > 8
    ) {
      alert('Preencha o campo corretamente');
    } else {
      this.newEvent.emit(parseInt(value));
    }
  }
}
