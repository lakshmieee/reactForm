import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { ToastrService } from 'ngx-toastr'; 

@Injectable()
export class SrvcInterceptorInterceptor implements HttpInterceptor {

  // constructor(private toastr: ToastrService) { } 

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // let httphead= new HttpHeaders().set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
    // request = request.clone({headers: httphead});
    

    console.log(request);
    return next.handle(request)
//     .pipe(
//       catchError((err : HttpErrorResponse) => { 
//         if(err.status == 401){
// this.toastr.error('you are not authorized person');
//         }
//       })
//     );
  }
}
