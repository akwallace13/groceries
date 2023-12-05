import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { share } from 'rxjs';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items = [
    {name: '',
    quantity: ''}
  ]

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, private emailComposer: EmailComposer, private router: Router, private storage: Storage) {}

openDetails() {
  this.router.navigateByUrl('/list/1337');
}

saveItems() {
  this.storage.set('my-items', this.items);
}

async LoadItems() {
  const result = await this.storage.get('my-items');
  if (result) {
    this.items = result;
  }
}

  //delete-works
  DeleteItem(item: any, index: any) {
    console.log("Deleting Item: ", item, index);

    const toast = this.toastCtrl.create({
      message: 'Removing ' + item.quantity + ' ' + item.name,
      duration: 3000,
      position: 'top',
    }).then(res => res.present());

    this.items.splice(index, 1);
    this.storage.remove('my-items');
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
          this.storage.set('my-items', this.items);
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
        this.storage.set('my-items', this.items);
     }}
      ]
    }).then(res => res.present());
  }

  //share - logs in console, share imported, button works, console log works
  ShareItem(item: any, index: any) {
    console.log("Sharing Item: ", item, index);

    this.emailComposer.isAvailable().then((availale: boolean) =>{if(availale) {
      
    }
    });

    let email = {
      to: '',
      cc: '',
      bcc: '',
      subject: 'Check Out My Groceries!',
      body: 'Here is my grocery list',
      isHTML: true
    }

    this.emailComposer.open(email);
    };
    }

