import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FoodPage } from '../food/food';
import { HomePage } from '../home/home';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  IrHome(){
    this.navCtrl.push(HomePage)
  }
  IrFood() {
    this.navCtrl.push(FoodPage);
  }
  
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad PrincipalPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Lugar Ocupado!',
      subTitle: 'Você selecionou um lugar já ocupado, tente mais tarde!',
      buttons: ['Fechar'],
        });
    alert.present();
  }
}


