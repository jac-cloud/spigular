import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergeneratorComponent } from './usergenerator.component';

describe('UsergeneratorComponent', () => {
  let component: UsergeneratorComponent;
  let fixture: ComponentFixture<UsergeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsergeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsergeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
