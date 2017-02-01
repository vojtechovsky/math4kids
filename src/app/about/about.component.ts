import { Component, OnInit } from '@angular/core';
import {MathService} from "../math/shared/math.service";
import {Exercise} from "../math/exercise";

@Component({
  selector: 'pvo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private mathService: MathService) { }

  ngOnInit() {
  }

  public justToTestInjectedService() : Exercise {
    return this.mathService.getExerciseFromRouter("r1");
  }

}
