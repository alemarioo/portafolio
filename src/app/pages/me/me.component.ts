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

  option = {
    from: 'middle-bottom',
    to: 'middle-top',
    direct: true,
    props: {
      '--ty': {
        from: '800px',
        to: '0px'
      }
    }
  };

  optionY2 = {
    from: 'middle-bottom',
    to: 'middle-top',
    direct: true,
    props: {
      '--ty': {
        from: '200px',
        to: '0px'
      }
    }
  };

  optiony2 = {
    from: 'middle-bottom',
    to: 'middle-top',
    direct: true,
    props: {
      '--ty': {
        from: '-200px',
        to: '50px'
      }
    }
  };

  optiony3 = {
    from: 'middle-bottom',
    to: 'middle-top',
    direct: true,
    props: {
      '--ty': {
        from: '300px',
        to: '-300px'
      }
    }
  };

  optionX = {
    from: 'top-middle',
    to: 'bottom-middle',
    direct: true,
    props: {
      '--tx': {
        from: '-100vw',
        to: '0vw'
      },
    }
  };

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
