import { Component } from '@angular/core';
import { celularProps } from '../types/celular';

@Component({
  selector: 'app-renderizando-lista',
  templateUrl: './renderizando-lista.component.html',
  styleUrls: ['./renderizando-lista.component.css']
})
export class RenderizandoListaComponent {
  celulares:celularProps[] = [
    {id: 3, nome: "Samsung x10" , descricao: "celular bom" , esgotado : false,},
    {id: 2, nome: "S5" ,esgotado : false,},
    {id: 2, nome: "Samsung mini" , descricao: "celular pequeno" , esgotado : true,}
  ]
}
