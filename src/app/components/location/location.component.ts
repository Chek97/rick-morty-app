import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locationId: string = "";
  location: any = {};

  constructor(private _dataService: DataService, private actRoute: ActivatedRoute) {
    this.locationId = this.actRoute.snapshot.paramMap.get('id') || '';
    this.getCharacterLocation(this.locationId);
   }

  ngOnInit(): void {
  }

  getCharacterLocation(id: string){
    this._dataService.getLocationCharacter(id)
      .subscribe(data => {
        this.location = data;
      });
  }

}
