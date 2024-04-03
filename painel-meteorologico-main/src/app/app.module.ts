import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SeletorCidadeComponent } from './seletor-cidade/seletor-cidade.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { InformacaoClimaComponent } from './informacao-clima/informacao-clima.component';
import { DetalhesClimaComponent } from './detalhes-clima/detalhes-clima.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClimaService } from './services/clima-service';

@NgModule({
  declarations: [
    AppComponent,
    SeletorCidadeComponent,
    InformacaoClimaComponent,
    DetalhesClimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
