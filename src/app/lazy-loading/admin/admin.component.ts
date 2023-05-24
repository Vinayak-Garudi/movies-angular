import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  myForm: FormGroup;
  dummyArr: any[] = [1, 2]
  adminForm!: FormGroup

  get itemControls() {
    return this.myForm.get('items') as FormArray;
  }

  rangeValidator(min: number, max: number) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control.value
      if (value && (value.length > max || value.length < min)) {
        return { range: true }
      }
      return null
    }
  }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      items: this.fb.array([this.createItem()]),
      dummyip: ['']
    });

    this.adminForm = this.fb.group({
      username: [''],
      fname: ['', [this.rangeValidator(5, 10), Validators.required]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.email, Validators.maxLength(15)]],
      contact: [''],
      arr: this.myForm
    })
  }

  ngOnInit(): void {
    this.dummyArr.forEach(element => {
      this.itemControls.push(this.createItem());
    });
    this.removeItem(0)
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
    });
  }

  addItem() {
    this.itemControls.push(this.createItem());
  }

  removeItem(index: number) {
    this.itemControls.removeAt(index);
  }

  showData() {
    console.log("dataaa", this.myForm.value, this.adminForm.value)
  }

  get emailCheck() {
    return this.adminForm.get('email')
  }
}
