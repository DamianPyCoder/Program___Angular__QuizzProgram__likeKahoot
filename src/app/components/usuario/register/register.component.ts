import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private _errorService: ErrorService) {
    this.registerForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['']
    }, { validator: this.checkPassword })
  }

  ngOnInit(): void {
  }

  register() {
    const usuario = this.registerForm.get('usuario')?.value;
    const password = this.registerForm.get('password')?.value;


    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(usuario, password).then(rta => {
      rta.user?.sendEmailVerification();
      this.toastr.success('Enviamos un correo electronico para verificar su cuenta!', 'Usuario registrado!');
      this.router.navigate(['/usuario'])
    }).catch(error => {
      this.registerForm.reset();
      this.loading = false;
      this.toastr.error(this._errorService.error(error.code), 'Error');
    })

  }

  /* error(code: string): string {

    switch (code) {

      // Email ya registrado
      case 'auth/email-already-in-use':
        return 'El Correo ya esta registrado'

      // Correo invalido
      case 'auth/invalid-email':
        return 'El Correo es invalido'

      // La Contraseña es muy debil
      case 'auth/weak-password':
        return 'La Contraseña es muy debil'

      default:
        return 'Error desconocido';
    }
  } */

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value;
    const confirmPassword = group.controls.repetirPassword?.value;
    return pass === confirmPassword ? null : { notSame: true }
  }

}
