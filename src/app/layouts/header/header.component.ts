import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user!:any
loggedIn:any;
//dataobservable!:Subscription
constructor(){}
  ngOnInit(): void {
   
   
  }
  check=localStorage.getItem('token')
  
    
 
//   ngOnDestroy(): void {
//     this.dataobservable.unsubscribe
// }
//  
}
