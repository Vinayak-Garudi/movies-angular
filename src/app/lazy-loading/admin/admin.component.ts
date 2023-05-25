import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  myForm: FormGroup;
  adminForm: FormGroup;
  newForm: FormGroup;
  dummyArr: any[] = [1, 2];
  auxEngArr: any[] = [1, 2, 3];
  mainEngArr: any[] = [1, 2, 3, 4];
  objArr: any[] = [{ res1: 'res1' }, { res2: 'res2' }, { res3: 'res3' }];
  dummyObj: any = {
    data1: 'data1',
    data2: 'data2',
    data3: 'data3',
  };
  engIncrement: number[] = [];
  engObj: any = {
    engKey: '12345',
    engName: 'Super Engine',
    engType: 'ship',
  };

  rangeValidator(min: number, max: number) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control.value;
      if (value && (value.length > max || value.length < min)) {
        return { range: true };
      }
      return null;
    };
  }

  get itemControls() {
    return this.myForm.get('items') as FormArray;
  }

  get newItemControls() {
    return this.newForm.get('newItems') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.newForm = this.fb.group({
      newItems: this.fb.array([]),
    });

    this.myForm = this.fb.group({
      items: this.fb.array([]),
      dummyip: [''],
    });

    this.adminForm = this.fb.group({
      username: [''],
      fname: ['', [this.rangeValidator(5, 10), Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.email,
          Validators.maxLength(15),
        ],
      ],
      contact: [''],
      arr: this.myForm,
    });
  }

  ngOnInit(): void {
    this.dummyArr.forEach(() => {
      this.itemControls.push(this.createItem());
    });
    this.objArr.forEach((ele) => {
      Object.assign(this.dummyObj, ele);
    });
    delete this.dummyObj['res1'];
    console.log('objjjj', this.dummyObj);

    this.auxEngArr.forEach((ele, i) => {
      this.addNewItem('auxEng');
      this.engIncrement.push(i + 1);
    });

    this.mainEngArr.forEach((ele, i) => {
      this.addNewItem('mainEng');
      this.engIncrement.push(i + 1);
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
    });
  }

  createNewItem(): FormGroup {
    return this.fb.group({
      auxEng: ['', Validators.required],
      mainEng: ['', Validators.required],
    });
  }

  addNewItem(controlName: string) {
    if (controlName === 'auxEng') {
      const temp = this.createNewItem();
      temp.removeControl('mainEng');
      this.newItemControls.push(temp);
    } else if (controlName === 'mainEng') {
      const temp = this.createNewItem();
      temp.removeControl('auxEng');
      this.newItemControls.push(temp);
    }
  }

  auxEngAdded(index: number) {
    return this.newItemControls.at(index).get('auxEng') !== null;
  }

  mainEngAdded(index: number) {
    return this.newItemControls.at(index).get('mainEng') !== null;
  }

  addItem() {
    this.itemControls.push(this.createItem());
  }

  removeItem(index: number) {
    this.itemControls.removeAt(index);
  }

  showData() {
    console.log('dataaa', this.myForm.value, this.adminForm.value);
  }

  get emailCheck() {
    return this.adminForm.get('email');
  }

  engData() {
    console.log('engdata', this.newForm.value);
    let auxTemp: any[] = [];
    let mainTemp: any[] = [];
    this.newForm.value.newItems.forEach((ele: any) => {
      if (ele.auxEng) {
        auxTemp.push(ele.auxEng);
      }
      if (ele.mainEng) {
        mainTemp.push(ele.mainEng);
      }
    });
    console.log('tempsss', auxTemp, mainTemp);
    auxTemp.forEach((ele, i) => {
      Object.assign(this.engObj, { [`auxEng${i + 1}`]: ele });
    });
    mainTemp.forEach((ele, i) => {
      Object.assign(this.engObj, { [`mainEng${i + 1}`]: ele });
    });
    console.log('engObj', this.engObj);
  }
}
