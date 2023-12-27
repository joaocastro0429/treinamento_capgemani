import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.compont';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { MultiplicarPorPipe } from './multiplicar-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { RenderizarListaComponent } from './renderizar-lista/renderizar-lista.component';
import { ComponetPersonalizadoComponent } from './componet-personalizado/componet-personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExemploServico01Component } from './exemplo-servico01/exemplo-servico01.component';
import { ExemploServico02Component } from './exemplo-servico02/exemplo-servico02.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponentComponent,
    MultiplicarPorPipe,
    PipeCustomizadoComponent,
    FormsComponent,
    RenderizarListaComponent,
    ComponetPersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ExemploServico01Component,
    ExemploServico02Component,
    CicloDeVidaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
