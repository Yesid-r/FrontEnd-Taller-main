import { Component, OnInit } from '@angular/core';
import { Acts } from './acts';
import { ActsService } from './acts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actss',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.css']
})
export class ActsComponent implements OnInit {
  titulo: string = "Lista de actss";


  actss: any[] = [];
  constructor(private actsService: ActsService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarActs();

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

  
  delete(acts: Acts): void {
    console.log("Hello");
    this.actsService.delete(acts.num_acts).subscribe(

      c => this.actsService.actss().subscribe(
        res => this.actss = res
      )
    )
  }

}
