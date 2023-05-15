import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnChanges {
  movieArr: any[] = []

  constructor(private userData: UserDetailsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("movie console", this.userData.movieResponse.results)
      this.userData.movieResponse.results.forEach((data: any) => {
        if (data.primaryImage) {
          this.movieArr.push(data)
        }
      });
    }, 2000);
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
