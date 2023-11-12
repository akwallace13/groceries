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
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Eggs",
      quantity: 12
    },
    {
      name: "Sugar",
      quantity: 1
    },
    {
      name: "Coffee",
      quantity: 4
    },
  ]

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  DeleteItem(item: any, index: any) {
    console.log("Deleting Item: ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing ' + item.quantity + ' ' + item.name,
      duration: 5000,
      position: 'top',
    }).then(res => res.present());
  }
  
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
