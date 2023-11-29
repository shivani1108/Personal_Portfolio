import { Component, HostListener } from '@angular/core';
import { Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@HostListener('window:scroll')

export class AppComponent {
  title = 'shiv_portfolio';

  constructor(
    private router: Router
  ) { }
  
 
  @HostListener('window:wheel' ,['$event']) onWheelScroll(evento: WheelEvent) {
    if (evento.deltaY > 0) {
      
      switch (this.router.url) {
        case '/': {
          this.router.navigate(['/about'])
          break
        }
        case '/about': {
          this.router.navigate(['/skills'])
          break
        }
        case '/skills': {
          this.router.navigate(['/contact'])
          break
        }
        case '/contact': {
          break
        }
      }
    } else { 

      switch (this.router.url) {
        case '/': {
          break
        }
        case '/about': {
          this.router.navigate(['/'])
          break
        }
        case '/skills': {
          this.router.navigate(['/about'])
          break
        }
        case '/contact': {
          this.router.navigate(['/skills'])
          break
        }
      }
    }
  }
}
