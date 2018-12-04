import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  IrPrincipal() {
    this.navCtrl.push(HomePage);
  } 

  IrCadastro() {
    this.navCtrl.push(HomePage);
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
