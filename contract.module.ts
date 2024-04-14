// contract.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from './contract.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContractComponent],
  imports:[
    CommonModule,
    FormsModule,
  ],
})
export class ContractModule { }
