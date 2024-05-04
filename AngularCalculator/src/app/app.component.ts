import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule,CommonModule],
  standalone: true
})
export class AppComponent {
  input = ''; // Girilen değerleri tutacak değişken
  result = ''; // Hesaplama sonucunu tutacak değişken
  history: string[] = []; // Geçmiş işlemleri tutacak dizi
  isDarkMode: boolean = false;
  showHistory: boolean = false; // Geçmiş işlemleri göstermek için bayrak

  // Girilen değere eklemek için metot
  appendToInput(value: string) {
    this.input += value;
  }

  // Temizleme metodu
  clear() {
    this.input = '';
    this.result = '';
  }

  // Hesaplama metodu
  calculate() {
    try {
      // Girilen ifadeyi değerlendir
      this.result = eval(this.input);
      // Geçmişe ekle
      this.history.unshift(this.input + ' = ' + this.result);
      // Geçmişte en fazla 3 işlem sakla
      if (this.history.length > 3) {
        this.history.pop();
      }
    } catch (e) {
      // Hata durumunda hata mesajını göster
      this.result = 'Error';
    }
  }

  // Light/Dark modunu değiştirme metodu
  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  // Geçmiş işlemleri temizleme metodu
  clearHistory() {
    this.history = [];
  }

  // Geçmiş işlemleri göster/gizle
  toggleHistory() {
    this.showHistory = !this.showHistory;
  }

  // İşaret değiştirme metodu
  toggleSign() {
    if (this.input !== '' && this.input !== '0' && this.input !== '.') {
      const firstChar = this.input.charAt(0);
      if (firstChar === '-') {
        this.input = this.input.slice(1);
      } else {
        this.input = '-' + this.input;
      }
    }
  }

}
