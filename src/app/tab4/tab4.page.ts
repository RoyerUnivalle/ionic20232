import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  
  public alertButtons = ['OK'];

  constructor(private dataService: DataService){ 
    
  }

  ngOnInit() {
  }

  getData(){
    //console.log("hola get Data");
    this.dataService.getEvents().subscribe((data) => {
      console.log(data);
    });
  }

}
