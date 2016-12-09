import {Component} from '@angular/core';
import {MathService} from "./math/shared/math.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MathService]
})
export class AppComponent {
  title = 'Math 4 kids!';
}
