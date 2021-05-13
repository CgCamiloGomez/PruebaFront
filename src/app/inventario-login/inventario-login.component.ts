import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario-login',
  templateUrl: './inventario-login.component.html',
  styleUrls: ['./inventario-login.component.css']
})
export class InventarioLoginComponent implements OnInit {

  Formulario : FormGroup;
  

  constructor( public router : Router) {
    this.Formulario = new FormGroup({
      user: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    })
   }

  ngOnInit(): void {
  }

  LoginIn(){
    if(this.Formulario.valid){
      console.log(this.Formulario.controls.user.value +"---" + this.Formulario.controls.password.value);
      this.router.navigate(["/inventario"]);
    }
  }

}
