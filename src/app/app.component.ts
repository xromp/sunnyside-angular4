import { Component } from '@angular/core';
import { DataService} from './data.service';
import { Http } from  '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rom';
  person = [
    {name:'rom',age:22,gender:'male'},
    {name:'2',age:17,gender:'female'},
    {name:'3',age:19,gender:'male'},
  ]

  persons = {};
  // binding event
  submit(event, person){
    console.log(event, person);
  }

    // service
  constructor(private dataService:DataService, private http:Http){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }

  someString:string = '';

  ngOnInit(){
    console.log(this.dataService.cars);
    this.someString = this.dataService.myData();
  }
  
  myData: Array<any>;
  // constructor(private http:HTTp)
    
  // }
}

