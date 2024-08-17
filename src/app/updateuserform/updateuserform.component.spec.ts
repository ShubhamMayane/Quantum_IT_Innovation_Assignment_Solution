import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserformComponent } from './updateuserform.component';

describe('UpdateuserformComponent', () => {
  let component: UpdateuserformComponent;
  let fixture: ComponentFixture<UpdateuserformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateuserformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateuserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
