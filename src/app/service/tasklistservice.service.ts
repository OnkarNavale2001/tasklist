import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasklistserviceService {

  constructor(private taskapi:HttpClient) { }
  url="http://localhost:3000/posts"
  gett()
  {
    return this.taskapi.get(this.url)
  }
  post(data:any)
  {
     return this.taskapi.post(this.url,data)
  }
  delete(data:any)
  {
     return this.taskapi.delete(`${this.url}/${data}`)
  }
  put(id:any,data:any)
  {
      return this.taskapi.put(`${this.url}/${id}`,data)
  }




}
