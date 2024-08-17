import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  UserName: string = "Hatem Nofal"
  DisplayDetails: boolean = false
  DisplayDetailsEvents:any[]=[]
  DisplayDetailsEvent=0
  onUserNameReset() {
    this.UserName = "";
  }

  onDisplayDetails(){
    this.DisplayDetails=!this.DisplayDetails
    this.DisplayDetailsEvent+=1;
    this.DisplayDetailsEvents.push(this.DisplayDetailsEvent)
  }
}
