import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent {
  @Input() texto = ''
  horario = new Date();
  timer: any = null;
  ngOnInit(): void {
    console.log("o exemplo onInit desparou")
    this.timer = setInterval(()=> this.horario = new Date(), 1000)
  }
}
