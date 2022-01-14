import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { ReceptAddComponent } from './main-page/recept-add/recept-add.component';
import { NapovedaHodnoceniComponent } from './napoveda-hodnoceni/napoveda-hodnoceni.component';
import { NapovedaReceptComponent } from './napoveda-recept/napoveda-recept.component';
import { NapovedaPostupComponent } from './napoveda-postup/napoveda-postup.component';
import { PravidlaComponent } from './pravidla/pravidla.component';
import { OnasComponent } from './onas/onas.component';
import { ReceptDetailComponent } from './recept-detail/recept-detail.component';
import { VaculdaComponent } from './vaculda/vaculda.component';


const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "recepty/novy", component: ReceptAddComponent},
  {path: "recept/:id", component: ReceptDetailComponent},
  {path: "hledat/:params", component: MainPageComponent},
  {path: "onas", component: OnasComponent},
  {path: "hodnoceni", component: NapovedaHodnoceniComponent},
  {path: "Jak vytvořit recept", component: NapovedaReceptComponent},
  {path: "Interaktivní postup", component: NapovedaPostupComponent},
  {path: "Pravidla vytváření receptu", component: PravidlaComponent},
  {path: "vaculda", component:VaculdaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
