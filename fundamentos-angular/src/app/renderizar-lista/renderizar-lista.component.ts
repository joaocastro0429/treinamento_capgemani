import { Component } from '@angular/core';
import { celular } from '../types/celulares'

@Component({
  selector: 'app-renderizar-lista',
  templateUrl: './renderizar-lista.component.html',
  styleUrl: './renderizar-lista.component.css'
})
export class RenderizarListaComponent {
  celulares: celular[] = [
    { id: 1, nome: "readmi c55", descricao: "um celular moderno", esgotado: true },
    { id: 2, nome: "moto g5", descricao: "um celular inovador", esgotado: true },
    { id: 3, nome: "lg", descricao: "celular mais vendido do mercado", esgotado: true }
  ]


}
