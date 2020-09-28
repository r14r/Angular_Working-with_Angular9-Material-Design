import { RouterTestingModule } from '@angular/router/testing';
import { } from 'jasmine';
import 'hammerjs';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  // 2nd beforeEach synchronous
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('span.title'));
    el = de.nativeElement;
  });

  //
  it('should create component', () => expect(comp).toBeDefined());

  //
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  //
  it(`should have as title 'App'`, () => {
    expect(app.title).toEqual('App');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to App!'
    );
  });

  //
  it('should have expected <span class="title"> material component', () => {
    fixture.detectChanges();
    const t_de = de.nativeElement;
    expect(t_de.innerText).toMatch('Angular Material Demo',
      '<span class="title"> should say "Angular Material Demo"');
  });
});
