import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/http-db-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  constructor(private datastorageservice: DataStorageService) { }

  ngOnInit(): void {
  }

  onSave(){
    this.datastorageservice.putRecipes();
  }

  onFetch(){
    this.datastorageservice.getRecipes().subscribe();
  }
}
