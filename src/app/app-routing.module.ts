import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { AdminGuard } from './admin.guard';
import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { DataResolver } from './data-resolver.guard';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: { data: DataResolver }
  },
  {
    path: 'products/:id',
    component: ProductsComponent,
    canActivate: [AdminGuard],
    canDeactivate: [UnsavedChangesGuard],
    resolve: { data: DataResolver }
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
