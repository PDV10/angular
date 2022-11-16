import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cubos } from './cubos/Cubos';

const URL = "https://60c4b776ec8ef800175e0604.mockapi.io/Cubos";

@Injectable({
  providedIn: 'root'
})
export class DataCubosService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Cubos[]>{
    return this.http.get<Cubos[]>(URL);
  }

}
