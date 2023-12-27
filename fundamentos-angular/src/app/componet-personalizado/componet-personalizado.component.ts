import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componet-personalizado',
  templateUrl: './componet-personalizado.component.html',
  styleUrl: './componet-personalizado.component.css'
})
export class ComponetPersonalizadoComponent {

  // decoration input 

  @Input() nome = ""
  @Input() sobrenome = ""


}
