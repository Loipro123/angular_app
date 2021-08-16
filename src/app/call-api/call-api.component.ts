import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService} from '../api-service/api.service';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.scss']
})
export class CallApiComponent {
  constructor(private _api_service: ConfigService){

  }
  sum_number: number | undefined;
  display_result: boolean = false;
  display_progress:boolean = true;
  onSubmit(form:NgForm){
      if(form.invalid){
        return;
      }else{
        this.display_result = true;
        this._api_service.getSum(form.value.num1,form.value.num2)
        .subscribe(
          data => {
            this.sum_number = data.Sum;
            this.display_progress = false;
              
          }
        )
      }
     
  }
  onReset(form:NgForm){
      this.display_progress = true;
      this.display_result = false;
      form.resetForm();
  }
}
