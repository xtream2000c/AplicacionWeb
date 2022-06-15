import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './administration/create-product/create-product.component';
import { EditProductComponent } from './administration/edit-product/edit-product.component';
import { ProductListComponent } from './administration/product-list/product-list.component';
import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { HomeComponent } from './home/home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'login',
    component: UserLoginComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path:'register',
    component: UserRegisterComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path:'profile',
    component: UserProfileComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path:'createProduct',
    component: CreateProductComponent,
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path:'editProduct/:id',
    component: EditProductComponent,
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path:'aboutMe',
    component: AboutMeComponent,
    loadChildren: () => import('./core/components/components.module').then(m => m.ComponentsModule)
  },
  {
    path:'cart',
    component: ShoppingCartComponent,
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
  {
    path:'adminList',
    component: ProductListComponent,
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
