import { Component } from '@angular/core';
import { Satellite } from './satellite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'orbit-report';
    sourceList: Satellite[];
    displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    this.displayList = [];
    this.search;
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          for (let i = 0; i < fetchedSatellites.length; i++) {
            let sats = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational)
            this.sourceList.push(sats);
          } 
          this.displayList = this.sourceList.slice(0);
       }.bind(this));
    }.bind(this));
 


  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
       }
    }
    this.displayList = matchingSatellites;
  }

}








          // let table = document.getElementById("table");
          // let index = 0;
          // for (let index in fetchedSatellites) {
          //   table.innerHTML += `
          //   <td>${fetchedSatellites[index].name}</td>
          //   <td [class.warning]="satellite.shouldShowWarning()">${fetchedSatellites[index].type}</td>
          //   <td>${fetchedSatellites[index].operational}</td>
          //   <td>${fetchedSatellites[index].orbitType}</t d>
          //   <td>${fetchedSatellites[index].launchDate}</td>
          //   `
          // }


          // let space = new Satellite(fetchedSatellites[7].name, fetchedSatellites[7].type, fetchedSatellites[7].launchDate, fetchedSatellites[7].orbitType, fetchedSatellites[7].operational);

          // this.sourceList.push(space);



//       this.displayList = this.sourceList.slice(0);
//    }.bind(this));
// }.bind(this));

