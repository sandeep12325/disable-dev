import { Component } from '@angular/core';
import DisableDevtool from 'disable-devtool';

DisableDevtool({
  ondevtoolopen(type, next){
    next();
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'disdev';
}
