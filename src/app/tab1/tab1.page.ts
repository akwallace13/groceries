import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items = [
    {name: 'Add Your Groceries',
    quantity: 'Slide Left - Delete, Slide Right - Edit, Add Item Button - Add New Item'}
    //{
     // name: "Milk",
     // quantity: 2
    //},
    //{
    //  name: "Eggs",
    //  quantity: 12
   // },
   // {
    //  name: "Sugar",
    //  quantity: 1
   // },
   // {
    //  name: "Coffee",
   //   quantity: 4
   // },
  ]

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  //delete-works
  DeleteItem(item: any, index: any) {
    console.log("Deleting Item: ", item, index);

    const toast = this.toastCtrl.create({
      message: 'Removing ' + item.quantity + ' ' + item.name,
      duration: 2000,
      position: 'top',
    }).then(res => res.present());

    this.items.splice(index, 1);
      }
    
  
  //update - works
  UpdateItem(item:any, index:any) {
    console.log("Updating Item: ", this.items);

    const prompt = this.alertCtrl.create({
      message: 'Update Item',
      inputs: [
        {name: 'name',
        placeholder: 'Name',
        value: item.name},
        {name: 'quantity',
        placeholder: 'Quantity',
        value: item.quantity},
      ],
      buttons: [
        {text: 'Cancel', //works
        handler: data => {
          console.log('Update Cancelled.');
        }},
        {text: 'Update',
        handler: item => {
          console.log('Item Updated.', item);
          this.items[index] = item;
        }}
        
      ]
    }).then(res => res.present());

    const toast = this.toastCtrl.create({
      message: item.name + ' Updated',
      duration: 4000,
      position: 'top',
    }).then(res => res.present());
  }
  

  //create-works
  AddItem(){
    console.log("Adding Item: ", this.items);
    const prompt = this.alertCtrl.create({
      message: "Enter Item",
      inputs: [
        {name: 'name',
        placeholder: 'Name'},
        {name: 'quantity',
        placeholder: 'Quantity'},
      ],
      buttons: [
        {text: 'Cancel',
        handler: data => {
          console.log('Addition Cancelled.');
      }},
      {text: 'Save',
      handler: item => {
        console.log('Item Saved.', item);
        this.items.push(item);
     }}
      ]
    }).then(res => res.present());
  }

}
