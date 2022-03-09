import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { EliminarTareasComponent } from './eliminar-tareas/eliminar-tareas.component';
import { ActualizarTareasComponent } from './actualizar-tareas/actualizar-tareas.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearTareasComponent,
    EliminarTareasComponent,
    ActualizarTareasComponent,
    ListaTareasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
