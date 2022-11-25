import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characterId: string = "";
  character: any = {};
  
  constructor(private _dataService: DataService, private actRoute: ActivatedRoute) {
    /* this.actRoute.queryParams.subscribe(params => {
      console.log(params);
    }); */    
    this.characterId = this.actRoute.snapshot.paramMap.get('id') || '';
    this.getCharacter(this.characterId);
  }
  
  ngOnInit(): void {
    
  }

  getCharacter(id: string){
    this._dataService.getCharacterDetail(id)
      .subscribe(data => {
        this.character = data;
      });
  }

}
