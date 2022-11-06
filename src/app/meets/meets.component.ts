import { Component, OnInit } from '@angular/core';
import { ActsService } from '../acts/acts.service';
import { Meets } from './meets';
import { MeetsService } from './meets.service';
import { RoomService } from '../room/room.service';

@Component({
  selector: 'app-meets',
  templateUrl: './meets.component.html',
  styleUrls: ['./meets.component.css']
})
export class MeetsComponent implements OnInit {
  titulo: string = "Lista de meets";
  

  actss: any[] = [];
  employeeElegido: any = null;
  meetss: any[] = [];
  rooms: any[] = [];

  constructor(private actsService: ActsService,private meetsService: MeetsService,private roomService: RoomService) { }

  ngOnInit(): void {

    this.listarActs();
    this.listarMeets();
    this.listarRooms();

  }

  listarActs(): void {
    this.actsService.actss().subscribe(
      data => {
        this.actss = data;
      },
      err => {
        console.log(err);
      }

    );
  }

  listarRooms(): void {
    this.roomService.room().subscribe(
      data => {
        this.rooms = data;
      },
      err => {
        console.log(err);
      }

    );
  }

  listarMeets(): void {
    this.meetsService.meets().subscribe(

      data => {
        this.meetss = data;
      },
      err => {
        console.log(err);
      }
    );
  }


  delete(meets: Meets): void {
    console.log("Hello");
    this.meetsService.delete(meets.num_meets).subscribe(

      c => this.meetsService.meets().subscribe(
        res => this.meetss = res
      )
    )
  }

}
