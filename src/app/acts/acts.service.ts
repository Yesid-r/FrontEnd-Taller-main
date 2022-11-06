import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Acts } from './acts';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActsService {

  private urlGet: string = "http://localhost:8080/"
  private urlPost: string = "http://localhost:8080/acts"
  private urlGetId: string = "http://localhost:8080/acts"
  private urlPut: string = "http://localhost:8080/acts"
  private urlDelete: string = "http://localhost:8080/acts"

  pipe = new DatePipe('en-US');
  todayWithPipe = null;


  constructor(private http: HttpClient) { }



  //metodo para obtener los employees
  actss(): Observable<any[]> {
    return this.http.get<any[]>(this.urlGet + "getAllActss");

  }

  //metodo para crear las actss
  create(acts: Acts): Observable<Acts> {
    return this.http.post<Acts>(this.urlPost, acts);
  }

  //metodo para obtener un solo acts por id
  get(num_acts: number): Observable<Acts> {

    return this.http.get<Acts>(this.urlGetId + '/' + num_acts);
  }

  //metodo para modificar la acts
  update(acts: Acts): Observable<Acts> {
    return this.http.put<Acts>(this.urlPut, acts);
  }

  //metodo para eliminar el acts
  delete(num_acts: number): Observable<Acts> {

    return this.http.delete<Acts>(this.urlDelete + '/' + num_acts);
  }
}
