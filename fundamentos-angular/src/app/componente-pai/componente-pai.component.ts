import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})
export class ComponentePaiComponent {

  sobrenome = "castro"

  mostrarNomeCompleto(nomeCompleto: any) {
    alert(`o meu nome completo é : ${nomeCompleto}`)
  }

}
