import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  charactersList: any = [];

  constructor(private _dataService: DataService, private router: Router) { 
    this.getCharactersList();
  }

  ngOnInit(): void {
  }

  getCharactersList(){
    this._dataService.getAllCharacters()
      .subscribe((resp: any) => {
        this.charactersList = resp.results;        
      });
  }

  sendLocation(url: string){
    const locationId = url.split('/');
    this.router.navigate(['/character/location', locationId[locationId.length - 1]]);
  }

  saveCharacter(character: any){
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    localStorage.setItem('favorites', JSON.stringify([...favorites, character]));
  }
}
