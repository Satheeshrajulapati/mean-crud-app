import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'contactUs', loadComponent: () => import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
  { path: 'products', loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent) },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  { path: 'logout', loadComponent: () => import('./components/logout/logout.component').then(m => m.LogoutComponent) },
  { path: 'register', loadComponent: () => import('./components/registration/registration.component').then(m => m.RegistrationComponent) },
  { path: 'cart', loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];