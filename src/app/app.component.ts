import { Component, NgModule } from '@angular/core';
import { MdButtonModule } from "@angular/material";


@NgModule({
  imports: [MdButtonModule],
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
