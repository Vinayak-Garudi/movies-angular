import { Component, OnInit } from '@angular/core';
// import { Observable, filter, from, interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    // const observable = new Observable((observer => {
    //   observer.next(1)
    //   observer.next(2)
    //   observer.next(3)
    //   observer.complete()
    // }))

    // const arrayObservable = from([1, 2, 3, 4, 5])

    // const intervalObservable = interval(1000)

    // observable.subscribe(
    //   value => console.log("observalble value", value),
    //   error => console.log("observalble error", error),
    //   () => console.log('observable completed!')
    // )

    // observable.pipe(
    //   map((val:any) => val * 2),
    //   filter((val:any) => val > 3)
    // )
    // .subscribe((val) => console.log("value...",val))
  }
}
