import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductKnowComponent } from './komponent/product-know/product-know.component';
import { ProductPenjelasanComponent } from './komponent/product-penjelasan/product-penjelasan.component';
import { ProductVarianRasaComponent } from './komponent/product-varian-rasa/product-varian-rasa.component';
import { EsCarouselComponent } from './komponent/es-carousel/es-carousel.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuHargaComponent } from './komponent/menu-harga/menu-harga.component';
import { ProsesProduksiComponent } from './komponent/proses-produksi/proses-produksi.component';
import { DisplayFreezerComponent } from './komponent/display-freezer/display-freezer.component';
import { OfflineComponent } from './komponent/offline/offline.component';
import { LokasiCarouselComponent } from './komponent/lokasi-carousel/lokasi-carousel.component';
import { OnlineComponent } from './komponent/online/online.component';
import { ContactUsComponent } from './komponent/contact-us/contact-us.component';
import { PatnershipComponent } from './komponent/patnership/patnership.component';
import { FooterComponent } from './komponent/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductKnowComponent,
    ProductPenjelasanComponent,
    ProductVarianRasaComponent,
    EsCarouselComponent,
    MenuHargaComponent,
    ProsesProduksiComponent,
    DisplayFreezerComponent,
    OfflineComponent,
    LokasiCarouselComponent,
    OnlineComponent,
    ContactUsComponent,
    PatnershipComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
