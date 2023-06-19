import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgbDateAdapter,
  NgbDateNativeUTCAdapter,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InstallationsModule } from './pages/installations/installations.module';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home' // Error 404 - Page not found
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    InstallationsModule,
  ],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }],
  bootstrap: [AppComponent],
})
export class AppModule {}
