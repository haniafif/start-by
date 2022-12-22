import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servico-dois',
  templateUrl: './exemplo-servico-dois.component.html',
  styleUrls: ['./exemplo-servico-dois.component.css']
})
export class ExemploServicoDoisComponent {
  descricao = '';

  adicionarDescricao(){
    console.log("O nome é " + this.descricao)
  }

}
