import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserProfileComponent } from '../AddUserProfile/add-user-profile/add-user-profile.component';
import { EditUserProfileComponent } from '../EditUserProfile/edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { GuardUserAccessGuard } from 'src/app/Guards/guard-user-access.guard';



const routes: Routes =[
  {path:'', redirectTo: '/User/UserProfile', pathMatch:'full'},
  {path:'UserProfile', component: AddUserProfileComponent, canActivate: [GuardUserAccessGuard]},
  {path: 'EditProfile', component:EditUserProfileComponent, canActivate: [GuardUserAccessGuard]}
]

@NgModule({
  declarations: [
    AddUserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class UserModuleModule { }
