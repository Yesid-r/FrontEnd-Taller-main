import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meets } from './meets';
import { MeetsService } from './meets.service';

@Component({
  selector: 'app-form-meets',
  templateUrl: './form-meets.component.html',
  styleUrls: ['./form-meets.component.css']
})
export class FormMeetsComponent implements OnInit {

  meets: Meets = new Meets();
  titulo: string = "Registro de Meets";


  constructor(private meetsService: MeetsService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activateRoute.params.subscribe(
      c => {
        let id_meets = c['id_meets'];
        if (id_meets) {
          this.meetsService.get(id_meets).subscribe(
            es => this.meets = es
          )
        }
      }
    );
  }

  create(): void {

    console.log(this.meets);
    this.meetsService.create(this.meets).subscribe(
      res => this.router.navigate(['/meets'])
    )
  }


  update(): void {

    console.log(this.meets);
    this.meetsService.create(this.meets).subscribe(
      res => this.router.navigate(['/meets'])
    )
  }

}
