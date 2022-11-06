import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Meets } from './meets';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MeetsService {

  private urlGet: string = "http://localhost:8080/getAllMeetss"
  private urlPost: string = "http://localhost:8080/meets"
  private urlGetId: string = "http://localhost:8080/meets"
  private urlPut: string = "http://localhost:8080/meets"
  private urlDelete: string = "http://localhost:8080/meets"

  pipe = new DatePipe('en-US');
  todayWithPipe = null;


  constructor(private http: HttpClient) { }

  //metodo para obtener los meets
  meets(): Observable<Meets[]> {


    return this.http.get<Meets[]>(this.urlGet);

  }

  //metodo para crear los meets
  create(meets: Meets): Observable<Meets> {
    return this.http.post<Meets>(this.urlPost, meets);
  }

  //metodo para obtener un solo meets
  get(id_meets: number): Observable<Meets> {

    return this.http.get<Meets>(this.urlGetId + '/' + id_meets);
  }

  //metodo para modificar el meets
  update(meets: Meets): Observable<Meets> {
    return this.http.put<Meets>(this.urlPut, meets);
  }

  //metodo para eliminar el meets
  delete(id_meets: number): Observable<Meets> {

    return this.http.delete<Meets>(this.urlDelete + '/' + id_meets);
  }
}
