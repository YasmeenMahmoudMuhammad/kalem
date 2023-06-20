import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { FieldsComponent } from './fields/fields.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConnectWithUsComponent } from './connect-with-us/connect-with-us.component';
import { MyProgramsComponent } from './my-programs/my-programs.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SignUpComponent } from './logIn/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructorsComponent,
    InstructorDetailsComponent,
    FieldsComponent,
    ProgramsComponent,
    ProgramDetailsComponent,
    AboutUsComponent,
    ConnectWithUsComponent,
    MyProgramsComponent,
    MyAccountComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    CreateNewPasswordComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
