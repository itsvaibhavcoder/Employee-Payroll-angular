import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { employeeReducer } from './employee.reducer';
import { EmployeeEffects } from './employee.effects';

import { environment } from '../environments/environment';
import { FilterPipe } from './filter.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ employee: employeeReducer }),  
    EffectsModule.forRoot([EmployeeEffects]),           
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
