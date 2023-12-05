import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

export interface Item {
  /*id: number,*/
  name: string,
  quantity: number
}

const ITEMS_KEY = 'my-item';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
  }

  GetAllItems() {
    return this.storage.get(ITEMS_KEY);
  }

  //create
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  //read
  getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  //update
  updateItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let newItems: Items[] = [];

      for (let i of items) {
        if (i.id = item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
          }
      }

      return this.storage.set(ITEMS_KEY, newItems);
    });
  }

  //delete
  deleteItem(id: number): Promise<Item> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }
  
    let toKeep: Item[] = [];
    
    for (let i of items) {
      if (i.id !== id) {
        toKeep.push(i);
      }
    }
    return this.storage.set(ITEMS_KEY, toKeep);
    });
  }