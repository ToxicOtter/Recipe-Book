import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registerede?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient){}
    
    signup(email: string, password: string){
        return this.http
        .post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3vYchj7XnI7KSRhCUhv9sb6tC9XmuNtU',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
        .pipe(catchError(this.handleError));
    }

    login(email: string, password: string){
        return this.http
        .post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3vYchj7XnI7KSRhCUhv9sb6tC9XmuNtU',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
        .pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already!';
                break;
            case 'EMAIL_NOT_FOUND':
            case 'INVALID_PASSWORD':
                errorMessage = 'The email or the password is wrong!';
                break;
        }
        return throwError(errorMessage);
    }
}