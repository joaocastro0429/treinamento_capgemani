import { Component, Input } from '@angular/core';
import { LoggerService } from '../logger.service'

@Component({
  selector: 'app-exemplo-servico01',
  templateUrl: './exemplo-servico01.component.html',
  styleUrl: './exemplo-servico01.component.css'
})
export class ExemploServico01Component {

  nome = "";

  constructor(private logger: LoggerService) {

  }

  adcionarNome() {
    console.log(`o nome é ${this.nome} e foi adcionado`)
  }

}
