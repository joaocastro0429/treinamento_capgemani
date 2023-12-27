import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messagem: string[] = []

  constructor() {

  }

  logar(messagem: string) {
    console.log(messagem)
    this.messagem.push(messagem)
  }



}
