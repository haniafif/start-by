import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servico',
  templateUrl: './exemplo-servico.component.html',
  styleUrls: ['./exemplo-servico.component.css']
})
export class ExemploServicoComponent {
  nome = '';
  adicionarNome(){
    console.log("O nome é " + this.nome)
  }
}
