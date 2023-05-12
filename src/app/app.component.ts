import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserDetailsService } from './services/user-details.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  moviesApi: string = 'https://moviesdatabase.p.rapidapi.com/titles'
  movieResponse: any = []

  constructor(private userData: UserDetailsService, private http: HttpClient) { }
  ngOnInit(): void {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '00ec652496mshde02c198d2ab51cp18810fjsn35525a14102f')
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com')

    this.http.get(this.moviesApi, { headers }).subscribe((res: any) => {
      this.userData.updateMovieResponse(res)
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
