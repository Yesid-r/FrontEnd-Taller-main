import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Room } from './room';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private urlGet: string = "http://localhost:8080/getAllProducts"
  private urlPost: string = "http://localhost:8080/room"
  private urlGetId: string = "http://localhost:8080/room"
  private urlPut: string = "http://localhost:8080/room"
  private urlDelete: string = "http://localhost:8080/room"

  pipe = new DatePipe('en-US');
  todayWithPipe = null;


  constructor(private http: HttpClient) { }

  //metodo para obtener los room
  room(): Observable<Room[]> {


    return this.http.get<Room[]>(this.urlGet);

  }

  //metodo para crear los room
  create(room: Room): Observable<Room> {
    return this.http.post<Room>(this.urlPost, room);
  }

  //metodo para obtener un solo room
  get(id_room: number): Observable<Room> {

    return this.http.get<Room>(this.urlGetId + '/' + id_room);
  }

  //metodo para modificar el room
  update(room: Room): Observable<Room> {
    return this.http.put<Room>(this.urlPut, room);
  }

  //metodo para eliminar el room
  delete(id_room: number): Observable<Room> {

    return this.http.delete<Room>(this.urlDelete + '/' + id_room);
  }
}
