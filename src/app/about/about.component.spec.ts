/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, async} from '@angular/core/testing';

import { AboutComponent } from './about.component';
import {QRCodeModule} from "angular2-qrcode";
import {MathService} from "../math/shared/math.service";
import {Exercise} from "../math/exercise";
import {By} from "@angular/platform-browser";


/*
 stub class
 */
class MockMathService  {
  public getExerciseFromRouter(routerKey: string) {
    return new Exercise();
  }
}



describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  let mock: MockMathService = new MockMathService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      providers: [
        // 1) use direct service
        //  MathService
        // 2) use stub without creating an instance
        //  { provide: MathService, useClass: MockMathService }
        // 3) use stub with instantiate of the class
        //  { provide: MathService, useValue: mock }
        { provide: MathService, useValue: mock }
      ],
      imports: [ QRCodeModule]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('must create component', () => {
    expect(component).toBeTruthy();
  });

  //tests
  it('must get injected service', () => {
    let exercise = component.justToTestInjectedService();

    expect(exercise).toBeDefined();
    expect(exercise.tasks).toBeDefined();
  });

  it('must create QR-code ', () => {

    // query for the title <h1> by CSS element selector
    let de = fixture.debugElement.query(By.css('qr-code'));
    let el = de.nativeElement;
    expect(el).toBeDefined();
  });

});
