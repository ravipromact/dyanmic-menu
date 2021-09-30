import { Component} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-menu';

  constructor(private formBuilder: FormBuilder) { }

  dynamicMenuForm: FormGroup;
  dynamicMenu:any

  //Menu Object
  menuObj = [
    {
      subItems: []
    }
  ];

  // Create Form 
  createForm(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(this.createItem(obj[i]));
    }
    this.dynamicMenuForm = this.formBuilder.group({
      items: this.formBuilder.array(arr)
    });
  }
  
  createItem(obj): FormGroup {
    var subArr = [];
    for (var i = 0; i < obj.subItems.length; i++) {
      subArr.push(this.createSubItem(obj.subItems[i]));
    }
    return this.formBuilder.group({
      name: '',
      subItems: this.formBuilder.array(subArr)
    });
  }

  createSubItem(subItem): FormGroup {
    var subArr = [];
    for (var i = 0; i < subItem.subItems2.length; i++) {
      subArr.push(this.createSubItem2(subItem.subItems2[i]));
    }
    return this.formBuilder.group({
      subname: subItem.subname,
      subItems2: this.formBuilder.array(subArr)
    });
  }

  createSubItem2(subItem): FormGroup {
    var subArr = [];
    for (var i = 0; i < subItem.subItems3.length; i++) {
      subArr.push(this.createSubItem3(subItem.subItems3[i]));
    }
    return this.formBuilder.group({
      subname2: subItem.subname2,
      subItems3: this.formBuilder.array(subArr)
    });
  }

  createSubItem3(subItem): FormGroup {
    return this.formBuilder.group({
      subname3: subItem.subname3
    });
  }

  createSingleItem(subItem): FormGroup {
    return this.formBuilder.group({
      subname: subItem.subname,
      subItems2: this.formBuilder.array([])
    });
  }

  //Add First Menu
  addSubItems(item: FormGroup, i): void {
    let value = item.get('name').value
    let subItems = item.get("subItems") as FormArray;
    var newSubItem = {
      subname: value
    };
    subItems.push(this.createSingleItem(newSubItem));
   
  }

  //Add SubMenu
  addSubItems2(item: FormGroup, i): void {
    let subItems = (item.get("subItems") as FormArray).controls[i].get(
      "subItems2"
    ) as FormArray;
    var newSubItem = {
      subname2: "",
      subItems3: this.formBuilder.array([])
    };
    subItems.push(this.createSubItem2(newSubItem));
  }
  //Add Nested SubMenu
  addSubItems3(item: FormGroup, i): void {
    let subItems = (item.get("subItems2") as FormArray).controls[i].get(
      "subItems3"
    ) as FormArray;
    var newSubItem = {
      subname3: "",
    };
    subItems.push(this.createSubItem3(newSubItem));
  }

  // Delete All Submenu by index
  removeItem(item, i) {
    const form = item.get("subItems") as FormArray;
    form.removeAt(i);
  }
  removeItem2(item, i) {
    const form = item.get("subItems2") as FormArray;
    form.removeAt(i);
  }
  removeItem3(item, i) {
    const form = item.get("subItems3") as FormArray;
    form.removeAt(i);
  }
  get formControls() {
    return (this.dynamicMenuForm.get('items') as FormArray).controls;
  }
  //Save changes to See Menu in Navbar
  saveChanges(){
    this.dynamicMenu = this.dynamicMenuForm.value; 
  }
  ngOnInit() {
    this.createForm(this.menuObj);
    this.dynamicMenu = this.dynamicMenuForm.value; 
  }
}
