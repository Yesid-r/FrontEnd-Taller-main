import { Component, OnInit } from '@angular/core';
import { Room } from './room';
import { RoomService } from './room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  titulo: string = "Lista de room";
  prueba: string = 'Esto es una prueba';

  room: Room[] = [];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {

    this.roomService.room().subscribe(

      c => this.room = c

    );
  }

  delete(room: Room): void {
    console.log("Hello");
    this.roomService.delete(room.id_room).subscribe(

      c => this.roomService.room().subscribe(
        res => this.room = res
      )
    )
  }

}
