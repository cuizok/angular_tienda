import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { App } from './app/app';
import { HomeComponent } from './app/home/home';
import { GalleryComponent } from './app/gallery/gallery';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: GalleryComponent }, // ✅ Productos -> Gallery
  { path: 'gallery', component: GalleryComponent },    // (opcional)
];


bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()         // << añade esto
  ],
}).catch(err => console.error(err));
