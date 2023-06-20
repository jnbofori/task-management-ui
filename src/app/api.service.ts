import { Task } from './tasks';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  token: string = "";

  constructor(private http: HttpClient) {
  }

  getTasks(search: string = "") {
    let url = `${API_HOST}/tasks`;
    if (search) {
      url = `${url}?search=${search}`
    }
    return this.http.get<Task[]>(url, this.httpOptions);
  }

  getSingleTask(taskId: string) {
    const url = `${API_HOST}/tasks/${taskId}`;
    return this.http.get<Task>(url, this.httpOptions);
  }

  addNewTask(task: Partial<Task>) {
    const url = `${API_HOST}/tasks`;
    return this.http.post(url, task, this.httpOptions);
  }

  updateTask(taskId: string | undefined, task: Task) {
    const url = `${API_HOST}/tasks/${taskId}`;
    return this.http.put(url, task, this.httpOptions);
  }

  deleteTask(taskId: string) {
    const url = `${API_HOST}/tasks/${taskId}`;
    return this.http.delete(url, this.httpOptions);
  }

  completeTask(taskId: string) {
    const url = `${API_HOST}/tasks/complete/${taskId}`;
    return this.http.post(url, this.httpOptions);
  }
}
