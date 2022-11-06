import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from './room';
import { RoomService } from './room.service';

@Component({
  selector: 'app-form-room',
  templateUrl: './form-room.component.html',
  styleUrls: ['./form-room.component.css']
})
export class FormRoomComponent implements OnInit {

  room: Room = new Room();
  titulo: string = "Registro de Room";


  constructor(private roomService: RoomService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activateRoute.params.subscribe(
      c => {
        let id_room = c['id_room'];
        if (id_room) {
          this.roomService.get(id_room).subscribe(
            es => this.room = es
          )
        }
      }
    );
  }

  create(): void {

    console.log(this.room);
    this.roomService.create(this.room).subscribe(
      res => this.router.navigate(['/room'])
    )
  }


  update(): void {

    console.log(this.room);
    this.roomService.create(this.room).subscribe(
      res => this.router.navigate(['/room'])
    )
  }

}
