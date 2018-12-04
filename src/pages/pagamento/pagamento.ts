import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html',
})
export class PagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagamentoPage');
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Pagamento Efetuado!',
      subTitle: 'Mesa Reservada 1, '+'Garçon irá de encontro para encaminhar até sua mesa!',
      buttons: ['Fechar'],
        });
    alert.present();
  }
}
