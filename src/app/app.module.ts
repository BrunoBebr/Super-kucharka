import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Component, EventEmitter } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { HodnoceniDialog, ReceptCardComponent } from './main-page/recept-card/recept-card.component';
import { ReceptAddComponent } from './main-page/recept-add/recept-add.component';
import { KategorieComponent } from './main-page/kategorie/kategorie.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { ReceptDetailComponent } from './recept-detail/recept-detail.component';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatGridListModule} from '@angular/material/grid-list';
import { OnasComponent } from './onas/onas.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import { ShareButtonsPopupModule } from 'ngx-sharebuttons/popup';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareModule } from 'ngx-sharebuttons';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ReceptCardComponent,
    ReceptAddComponent,
    KategorieComponent,
    ReceptDetailComponent,
    OnasComponent,
    HodnoceniDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTreeModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ShareButtonsPopupModule,
    ShareIconsModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
