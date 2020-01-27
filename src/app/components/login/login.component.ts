import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailMatch  } from '../../helpers/emailMatch';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../register/register.component.scss']
})
export class LoginComponent implements OnInit {

  regForm;
  loginForm ;
  loading =  false;

  constructor( private router: Router,  private formBuilder: FormBuilder, public sharedService: SharedService, private apiservice: ApiService) {

    this.loginForm =  this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPass: ['', [Validators.required]],
      
    }
   
    );

   }

//  getter for registerFrom
get f() { return this.loginForm .controls; }


//  on submit of registration form
 onLoginFormSubmit() {
   console.log(this.loginForm); 
  if(this.loginForm.invalid){
    this.sharedService.openSnackBar('Please fill the form', 'ok', 8000, 'snack-red-bg');
  }else{
    this. loading =  true;
    let user = {
    userEmail: this.loginForm.value.userEmail,
    userPass:  this.loginForm.value.userPass,
    }
    // 
    this.apiservice.loginUser(user).subscribe(
      res => {
        console.log(res);
        setTimeout( () =>{
          this. loading =  false;
          this.sharedService.openSnackBar(`Successfull!! `, 'ok', 5000, 'snack-blue-bg');
          localStorage.setItem('NO_W_XX', res.token);
          this.router.navigate(['/']);
        
        }, 3000);
        
      },
      err => {
        console.log(err);
        setTimeout( () =>{
        this. loading =  false;
        if(err.error.message){
          this.sharedService.openSnackBar(err.error.message, 'ok', 8000, 'snack-red-bg');
        }else{
          this.sharedService.openSnackBar('Oops! Unknown error occured, please try again', 'ok', 8000, 'snack-red-bg');
        }
      }, 3000);
        
      }
    )

   
    
  }



 }

  ngOnInit() {
  }

}
