import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acts } from './acts';
import { ActsService } from './acts.service';

@Component({
  selector: 'app-form-acts',
  templateUrl: './form-acts.component.html',
  styleUrls: ['./form-acts.component.css']
})
export class FormActsComponent implements OnInit {

  actss: Acts = new Acts();



  titulo: string = "Registro de Acts";


  constructor( private actsService: ActsService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {

    this.activateRoute.params.subscribe(
      c => {
        let num_acts = c['num_acts'];
        if (num_acts) {
          this.actsService.get(num_acts).subscribe(
            es => this.actss = es
          )
        }
      }
    );
  }

  create(): void {

    console.log(this.actss);
    this.actsService.create(this.actss).subscribe(
      res => this.router.navigate(['/acts'])
    )

   
  
  }


  update(): void {    
    console.log(this.actss);
    this.actsService.create(this.actss).subscribe(
      res => this.router.navigate(['/acts'])
    )
  }

}
