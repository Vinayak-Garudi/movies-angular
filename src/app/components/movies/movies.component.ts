import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { Observable, Observer, Subscription, filter, from, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnChanges, OnDestroy {
  movieArr: any[] = []
  filteredMovieArr: any[] = []
  searchMovie: string = ""
  observableSubs!: Subscription

  constructor(private userData: UserDetailsService) {
  }

  ngOnInit(): void {

    this.userData.fetchMovies().subscribe((res: any) => {
      res.results.forEach((data:any) => {
        if (data.primaryImage) {
          this.movieArr.push(data)
          this.filteredMovieArr = this.movieArr
        }
      })
    })

    function sequenceSubscriber(observer: Observer<number>) {
      observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.complete()

    }

    const sequence = new Observable(sequenceSubscriber)

    sequence.subscribe({
      next(num) {
        console.log("nummm", num * 10)
      },
      complete() {
        console.log("Finished sequence")
      },
    })

    const myObservable = of(1, 2, 3)

    const arrayObservable = from([1, 2, 3, 4, 5])

    const intervalObservable = interval(1000)

    arrayObservable.pipe(
      map((val: any) => val * 10),
      filter((val: any) => val > 20)
    )
      .subscribe((val: any) => console.log("arrSub", val))

    this.observableSubs = intervalObservable.subscribe((val: any) => {
      if (val < 5) {
        console.log("valll", val)
      }
    })

    this.observableSubs = myObservable.subscribe((val: any) => {
      console.log("valueee", val * 10)
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    this.observableSubs.unsubscribe()
  }

  onMovieSearch() {
    if (this.searchMovie && this.searchMovie.length > 0 && this.movieArr.length > 0) {
      this.filteredMovieArr = this.movieArr.filter(x => {
        if (x?.originalTitleText.text && x.originalTitleText.text) {

          return x?.originalTitleText.text.toLowerCase().includes(this.searchMovie.toLowerCase())
        }
      })
    }
    else {
      this.filteredMovieArr = this.movieArr
    }
  }

}
