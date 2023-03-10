import { ApiTestService } from './../../../../shared/services/api-test/api-test.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request-api',
  templateUrl: './request-api.component.html',
  styleUrls: ['./request-api.component.css'],
  providers: [ApiTestService],
})
export class RequestApiComponent {
  @Input() urlApi: string = '';
  response: Object = {};
  backgroundColor: string = '#000000';
  fontColor: string = '#ffdd00';

  constructor(private service: ApiTestService) {}

  getResponse() {
    if (this.urlApi) {
      this.service
        .getResponse(this.urlApi)
        .subscribe((response) => (this.response = response));
    }
  }

  setColorBackground(value: string) {
    this.backgroundColor = value;
  }
  setColorFont(value: string) {
    this.fontColor = value;
  }
}
