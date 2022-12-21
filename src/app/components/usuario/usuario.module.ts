import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, RecuperarPasswordComponent, VerificarCorreoComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
