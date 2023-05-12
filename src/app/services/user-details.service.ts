import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
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
    console.log("movies", this.movieResponse)
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
