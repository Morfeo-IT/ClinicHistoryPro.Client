import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDynamicsComponent } from './form-dynamics/form-dynamics.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const components = [
  FormDynamicsComponent,
  HeaderComponent,
  FooterComponent, 
  MenuItemComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: components
})
export class ComponentsModule { }
