import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailValidatorsComponent } from './email-validators.component';

describe('EmailValidatorsComponent', () => {
  let component: EmailValidatorsComponent;
  let fixture: ComponentFixture<EmailValidatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailValidatorsComponent]
    });
    fixture = TestBed.createComponent(EmailValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
