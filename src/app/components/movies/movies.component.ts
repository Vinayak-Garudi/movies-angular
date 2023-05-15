import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { Observable, filter, from, interval, map } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnChanges {
  movieArr: any[] = []
  filteredMovieArr: any[] = []
  searchMovie: string = ""

  constructor(private userData: UserDetailsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("movie console", this.userData.movieResponse.results)
      if (this.userData.movieResponse.results) {
        this.userData.movieResponse.results.forEach((data: any) => {
          if (data.primaryImage) {
            this.movieArr.push(data)
            this.filteredMovieArr = this.movieArr
          }
        });
      }
    }, 2000);

    const observable = new Observable((observer => {
      observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.complete()
    }))

    const arrayObservable = from([1, 2, 3, 4, 5])

    const intervalObservable = interval(1000)

    observable.subscribe(
      value => console.log("observalble value", value),
      error => console.log("observalble error", error),
      () => console.log('observable completed!')
    )

    observable.pipe(
      map((val: any) => val * 2),
      filter((val: any) => val > 3)
    )
      .subscribe((val) => console.log("value...", val))

    arrayObservable.pipe(
      map((val: any) => val * 10),
      filter((val: any) => val > 20)
    )
      .subscribe((val: any) => console.log("arrSub", val))
  }
  ngOnChanges(changes: SimpleChanges): void {
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
    console.log("filteredMovie", this.filteredMovieArr)
  }

}
