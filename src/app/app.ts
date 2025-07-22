import { Component } from '@angular/core';
// Import the CharacterListComponent from its correct path
import { CharacterListComponent } from './components/character-list/character-list';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// GUÍA PARA EL ESTUDIANTE:
// 1. Importa tu `CharacterListComponent`.
// 2. Añádelo al array de `imports` de este componente.

@Component({
  selector: 'app-root',
  imports: [CharacterListComponent, CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'rick-and-morty-angular-v20';
}