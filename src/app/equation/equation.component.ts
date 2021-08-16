import { Component, OnInit } from '@angular/core';
import { ConfigService} from '../api-service/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})
export class EquationComponent implements OnInit {
  constructor(private _api_service: ConfigService){

  }
  

  ngOnInit(): void {
  }
  equation:any = [];
  equation_api:any =[];
  level_quation = 0;
  idx0 = -1;
  idx1 = -1;
  idx2 = -1;
  onClick(value:string){
    this.equation_api.push(value);
    if(this.level_quation == 0){
        if(value == '['){
            this.level_quation+= 1;
            this.equation.push([]);
        }else if(value == ']'){
            this.level_quation-= 1;
        }else{
            this.equation.push(value);
        }
        this.idx0 +=1;
    }else if(this.level_quation == 1){
        if(value == '['){
            this.level_quation+= 1;
            this.equation[this.idx0].push([]);
        }else if(value == ']'){
            this.level_quation-= 1;
        }else{
            this.equation[this.idx0].push(value);
        }
        this.idx1 +=1;
    }else if(this.level_quation == 2){
        if(value == '['){
            this.level_quation+= 1;
            this.equation[this.idx0][this.idx1].push([]);
        }else if(value == ']'){
            this.level_quation-= 1;
        }else{
            this.equation[this.idx0][this.idx1].push(value);
        }
        this.idx2 +=1;
    }else{
        if(value == '['){
            this.level_quation+= 1;
            this.equation[this.idx0][this.idx1][this.idx2].push([]);
        }else if(value == ']'){
            this.level_quation-= 1;
        }else{
            this.equation[this.idx0][this.idx1][this.idx2].push(value);
        }
    }
  }
  onDelete(){
      this.equation.pop();
  }
  onReset(form:NgForm){
    this.level_quation = 0;
    this.idx0 = -1;
    this.idx1 = -1;
    this.idx2 = -1;
    this.equation_api = [];
    this.equation =[];
    form.resetForm();
  }
  onSubmit(form:NgForm){     
    if(form.invalid){
        return;
    }
      this._api_service.postEquation({user_name: form.value.user, equation: this.equation}).subscribe({
          next: data => {
          alert("You post an equation to server successfully!");
          console.log(data.object_equation);
          this.onReset(form);
      },
      error: error => {
          console.error('There was an error!', error);
      }
      })
  }
}
