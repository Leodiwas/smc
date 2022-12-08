import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageNOtFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [PageNOtFoundComponent, LoaderComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [CommonModule, PageNOtFoundComponent, LoaderComponent],
})
export class SharedModule {}
