import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { ReceptAddComponent } from './main-page/recept-add/recept-add.component';
import { OnasComponent } from './onas/onas.component';
import { ReceptDetailComponent } from './recept-detail/recept-detail.component';


const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "recepty/novy", component: ReceptAddComponent},
  {path: "recept/:id", component: ReceptDetailComponent},
  {path: "hledat/:params", component: MainPageComponent},
  {path: "onas", component: OnasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
