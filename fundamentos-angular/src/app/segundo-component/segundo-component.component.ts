import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrl: './segundo-component.component.css'
})
export class SegundoComponentComponent {
  nome = "joao"
  dataNascimento = "29-04-1988"
  urlImagem = "/assets/homem.avif"

  mostrarDataNascimento() {
    alert(`a data de nascimento ${this.dataNascimento}`)
  }
}
