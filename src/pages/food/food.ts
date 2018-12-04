import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PagamentoPage } from '../pagamento/pagamento';

/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }
    IrPagamento(){
      this.navCtrl.push(PagamentoPage);
    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }  
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Pedido Feito!',
      subTitle: 'Coma Feladapota, e após efetue o pagamento!',
      buttons: ['confirmar', 'cancelar'],
        });
    alert.present();

    
  }
}
