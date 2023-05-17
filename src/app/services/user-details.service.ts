import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService implements OnChanges, OnInit {
  isLogin!: boolean
  userEmail !: string | undefined
  userPassword !: string | undefined
  allUsers: any = [
    { email: "vinayak@gmail.com", password: "vinayak123" },
    { email: "garudi@gmail.com", password: "garudi123" },
    { email: "vinayakgarudi@gmail.com", password: "vinayakgarudi123" }
  ]
  invalidCred: boolean = false
  movieResponse: any = []
  moviesApi: string = 'https://moviesdatabase.p.rapidapi.com/titles'
  forecastApi: string = "https://forecast9.p.rapidapi.com/rapidapi/forecast/46.95828/10.87152/summary/"

  fetchMovies(): Observable<any[]> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '00ec652496mshde02c198d2ab51cp18810fjsn35525a14102f')
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com')
    return this.http.get<any[]>(this.moviesApi, { headers })
  }

  fetchForecast() {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '00ec652496mshde02c198d2ab51cp18810fjsn35525a14102f')
      .set('X-RapidAPI-Host', 'forecast9.p.rapidapi.com')
    return this.http.get(this.forecastApi, { headers })
  }

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  getUserDetails() {
    return {
      isLogin: this.isLogin,
      userEmail: this.userEmail,
      userPassword: this.userPassword
    }
  }

  getMovieResponse() {
    return this.movieResponse
  }

  updateMovieResponse(res: any) {
    this.movieResponse = res
  }

  handleLogin(email: string, password: string) {
    this.allUsers.forEach((element: any) => {
      if (element.email == email && element.password == password) {
        this.invalidCred = false
        this.userEmail = email
        this.userPassword = password
        this.isLogin = true
        this.router.navigate(['/'])
      }
      else {
        this.invalidCred = true
      }
    });
  }

  handleLogOut() {
    this.isLogin = false
    this.userEmail = undefined
    this.userPassword = undefined
    this.invalidCred = false
  }
}
