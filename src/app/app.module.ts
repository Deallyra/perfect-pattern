import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreatorsComponent } from './creators/creators.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PatternsComponent } from './patterns/patterns.component';
import { TagComponent } from './tags/tag.component';
import { FabricsComponent } from './fabrics/fabrics.component';
import { FabricComponent } from './fabrics/fabric/fabric.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CreatorsComponent,
    FooterComponent,
    HeaderComponent,
    PatternsComponent,
    TagComponent,
    FabricsComponent,
    FabricComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
