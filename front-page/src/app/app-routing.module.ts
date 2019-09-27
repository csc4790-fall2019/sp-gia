import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryComponent } from './components/primary/primary.component';
import { AdminComponent } from './component/admin/admin.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';


const routes: Routes = [
	{path: 'admin', component: AdminComponent},
	{path: '', component: PrimaryComponent},
	{path: 'createAccount', component: CreateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminComponent, PrimaryComponent, CreateAccountComponent]