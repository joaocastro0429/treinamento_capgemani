import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})
export class CicloDeVidaComponent implements OnInit {
  horario = new Date();
  timer: any = null

  ngOnInit(): void {
    console.log("o event onInit foi disparado")

    this.timer = setInterval(() => this.horario = new Date(), 1000)


  }

}
