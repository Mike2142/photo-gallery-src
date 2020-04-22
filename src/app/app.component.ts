import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-slider';

  generateTime(){
    let date = new Date(+(new Date()) - Math.floor(Math.random()*10000000000));
    return date.toLocaleTimeString('en-GB');
  };

}


