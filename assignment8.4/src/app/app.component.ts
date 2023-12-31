import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment8.4';
  typetext1:string = '';
  lengthtext:any;
  public typetext(value:any){
  this.typetext1 = value.target.value;
  this.lengthtext = this.typetext1.length;

  }
}
