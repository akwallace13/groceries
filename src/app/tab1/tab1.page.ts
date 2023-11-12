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

  DeleteItem(){
    alert("Oh darn, it's gone")
    console.log("Deleting Item.")
  }
  
  AddItem(){
    alert("OH GOD YOU CLICKED IT")
    console.log("Adding Item.");
  }

}
