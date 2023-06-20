import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { FieldsComponent } from './fields/fields.component';
import { ProgramsComponent } from './programs/programs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConnectWithUsComponent } from './connect-with-us/connect-with-us.component';
import { MyProgramsComponent } from './my-programs/my-programs.component';

const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'**' , component:NotFoundComponent},
  {path:'navbar' , component:NavbarComponent},
  {path:'footer' , component:FooterComponent},
  {path:'instructors' , component:InstructorsComponent},
  {path:'instructor/{id}' , component:InstructorDetailsComponent},
  {path:'fields' , component:FieldsComponent},
  {path:'programs' , component:ProgramsComponent},
  {path:'aboutUs' , component:AboutUsComponent},
  {path:'connectUs' , component:ConnectWithUsComponent},
  {path:'cart' , component:MyProgramsComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
