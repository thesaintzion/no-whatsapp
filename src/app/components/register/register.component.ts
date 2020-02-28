import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailMatch  } from '../../helpers/emailMatch';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regForm;
  registerForm;
  loading =  false;

  constructor( private router: Router,  private formBuilder: FormBuilder, public sharedService: SharedService, private apiservice: ApiService) {

    this.registerForm =  this.formBuilder.group({
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(35)]],
      confirmPass: ['', Validators.required]
    },
    {validator: EmailMatch('userPass', 'confirmPass')}
    );

   }

//  getter for registerFrom
get f() { return this.registerForm.controls; }


//  on submit of registration form
//  onRegFormSubmit() {
//   if(this.registerForm.invalid){
//     this.sharedService.openSnackBar('Please fill the form', 'ok', 8000, 'snack-red-bg');
//   }else{
//     this. loading =  true;
//     let user = {
//     userName:  this.registerForm.value.userName,
//     userEmail: this.registerForm.value.userEmail,
//     userPass:  this.registerForm.value.userPass,
//     }
//     // 
//     this.apiservice.registerUser(user).subscribe(
//       res => {
//         console.log(res);
//         setTimeout( () =>{
//           this. loading =  false;
//           this.sharedService.openSnackBar('Successfull!!', 'ok', 5000, 'snack-blue-bg');
//          this.router.navigate(['/login']);
//         }, 3000);
        
//       },
//       err => {

//         console.log(err);
//         setTimeout( () =>{
//           this. loading =  false;
//           if(err.error.message){
//             this.sharedService.openSnackBar(err.error.message, 'ok', 8000, 'snack-red-bg');
//           }else{
//             this.sharedService.openSnackBar('Oops! Unknown error occured, please try again', 'ok', 8000, 'snack-red-bg');
//           }
          
//         }, 3000);
        
//       }
//     )

   
    
//   }



//  }



  ngOnInit() {
  }

}
