import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasklistserviceService } from './service/tasklistservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private services: TasklistserviceService) {
    console.log()
  }
  ngOnInit(): void {
    this.getm()
  }
  title = 'tasklistusingjsonserver';
  @ViewChild('form') form!: NgForm

  data: any = [];
  id:any
task:any
val1:boolean=true;
val2:boolean=false;
  getm() {
    this.services.gett().subscribe((res) => this.data = res)
  }
  postm() {
    this.services.post(this.form.value).subscribe(() => this.getm())
    console.warn(this.form.value)
    this.form.reset()
  }
  deletee(data:any)
  {
     this.services.delete(data.id).subscribe(()=>this.getm())
  }
  edit(data:any)
  {
     this.task=data.task
     this.id=data.id
     this.val1=false
     this.val2=true
  }
  put()
  { 
     this.services.put(this.id,this.form.value).subscribe(()=>this.getm())    
     this.val1=true
     this.val2=false 
    
  }
  


}
