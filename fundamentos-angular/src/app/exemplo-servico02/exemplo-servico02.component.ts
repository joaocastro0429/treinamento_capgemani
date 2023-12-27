import { Component } from '@angular/core';
import { LoggerService } from '../logger.service'

@Component({
  selector: 'app-exemplo-servico02',
  templateUrl: './exemplo-servico02.component.html',
  styleUrl: './exemplo-servico02.component.css'
})
export class ExemploServico02Component {
  descricao = ""

  constructor(public logger: LoggerService) {

  }

  adcionarProduto() {
    console.log(`o nome do produto é ${this.descricao} e foi adcionado`)

  }
}
