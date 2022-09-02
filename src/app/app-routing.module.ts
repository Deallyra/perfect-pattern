import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatternsComponent } from './patterns/patterns.component';
import { FabricsComponent } from './fabrics/fabrics.component';
import { FabricComponent } from './fabrics/fabric/fabric.component';
import { patternComponent } from './patterns/pattern/pattern.component';
import { CreatorsComponent } from './creators/creators.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'patterns', component: PatternsComponent},
    {path: 'patterns/:label', component: PatternsComponent},
    {path: 'patterns/tag/:label', component: PatternsComponent},
    {path: 'patterns/term/:label', component: PatternsComponent},
    {path: 'pattern/:id', component: patternComponent},
  {path: 'fabrics', component: FabricsComponent},
    {path: 'fabric/:id/:name', component: FabricComponent},
  {path: 'creators', component: CreatorsComponent},
    {path: 'creator/:id/:name', component: CreatorsComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
