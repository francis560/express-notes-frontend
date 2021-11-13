import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { GroupComponent } from '../page/group/group.component';
import { CreateNoteComponent } from '../components/create-note/create-note.component';
import { GroupMembersComponent } from '../components/group-members/group-members.component';
import { ViewNotesComponent } from '../components/view-notes/view-notes.component';
import { EditNotesComponent } from '../components/edit-notes/edit-notes.component';
import { DownloadNoteComponent } from '../components/download-note/download-note.component';
import { CleanDatePipe } from '../../pipes/clean-date.pipe';



const routes: Routes = [
  
  { path: '', component: GroupComponent }

]



@NgModule({
  declarations: [
    GroupComponent,
    CreateNoteComponent,
    GroupMembersComponent,
    ViewNotesComponent,
    EditNotesComponent,
    DownloadNoteComponent,
    CleanDatePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReusableModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class GroupModule { }
