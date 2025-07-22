import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiResponse, Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private readonly API_URL: string = 'https://rickandmortyapi.com/api/character';
  private readonly http = inject(HttpClient);
  private charactersSignal = signal<Character[]>([]);
  public readonly characters = this.charactersSignal.asReadonly();

  // Método para obtener todos los personajes
  public getCharacters(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_URL).pipe(
      tap(response => {
        this.charactersSignal.set(response.results);
      })
    );
  }
  // Método para buscar personajes por nombre
  public searchCharacters(name: string): Observable<ApiResponse> {
    const trimmedName = name.trim();

    if (trimmedName === '') {
      return this.getCharacters(); // Retorna todos si no se escribió nada
    }

    const searchUrl = `${this.API_URL}?name=${encodeURIComponent(trimmedName)}`;

    return this.http.get<ApiResponse>(searchUrl).pipe(
      tap(response => {
        this.charactersSignal.set(response.results);
      })
    );
  }
}