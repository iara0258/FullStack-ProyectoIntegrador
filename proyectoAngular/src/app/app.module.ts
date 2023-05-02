import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductosComponent } from './shop/productos/productos.component';
import { PortadaComponent } from './shop/portada/portada.component';
import { LayoutTiendaComponent } from './shop/layout-tienda/layout-tienda.component';
import { BuscadorComponent } from './shop/buscador/buscador.component';
import { CarritoComponent } from './shop/carrito/carrito.component';
import { ConsejoComponent } from './consejo/consejo.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/login/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProductosComponent,
    PortadaComponent,
    LayoutTiendaComponent,
    BuscadorComponent,
    CarritoComponent,
    ConsejoComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
