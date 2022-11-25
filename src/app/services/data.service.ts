import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  //get list of characters
  getAllCharacters(){
    return this.http.get(`${this.url}/character`);
  }

  getCharacterDetail(id: string){
    return this.http.get(`${this.url}/character/${id}`);
  }

  getLocationCharacter(id: string){
    return this.http.get(`${this.url}/location/${id}`);
  }
}
