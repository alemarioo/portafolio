import { Component, HostListener, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(
    private toaster: ToastrService
  ) { }
  imageSelected = {} as any;
  ngOnInit(): void {
  }

  dialogOpen = false;
  
  notification(){
    this.toaster.success('Has copiado mi nombre de usuario', 'Éxito')
  }

  //============================ MODAL ===============================
  openDialog(title:string, url:string){
    this.dialogOpen = true;
    this.imageSelected.title = title;
    this.imageSelected.image = url;
  }

  closeModal(){
    this.dialogOpen = false;
  }

  //Cierra el modal si da click fuera de este
  @HostListener('document:click', ['$event.target'])
  closeModalOnClik($event: HTMLElement){
    if ($event.id === 'outside') {
      this.dialogOpen = false;
    }
  }

}
