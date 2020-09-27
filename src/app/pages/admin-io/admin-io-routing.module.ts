import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialArchiveComponent } from './material-archive/material-archive.component';
import { ProtocolFileComponent } from './protocol-file/protocol-file.component';

const routes: Routes = [
  { path: 'materialArchive', component: MaterialArchiveComponent },
  { path: 'protocolFile', component: ProtocolFileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminIoRoutingModule { }
