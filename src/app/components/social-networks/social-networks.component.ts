import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent implements OnInit {

  constructor(
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  notification(){
    this.toaster.success('Has copiado mi nombre de usuario', 'Éxito')
  }

}
