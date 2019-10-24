import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimaryComponent } from './components/primary/primary.component';
import { AdminComponent } from './component/admin/admin.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { MatchComponent } from './component/match/match.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';

const routes: Routes = [
	{path: 'admin', component: AdminComponent},
	{path: '', component: PrimaryComponent},
	{path: 'createAccount', component: CreateAccountComponent},
	{path: 'Match', component: MatchComponent},
	{path: 'editProfile', component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminComponent, PrimaryComponent, CreateAccountComponent, MatchComponent, EditProfileComponent]
