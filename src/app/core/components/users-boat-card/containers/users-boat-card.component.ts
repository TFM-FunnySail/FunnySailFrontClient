import {Component, Input, OnInit } from '@angular/core';
import {BoatOutputDTO, BoatsService} from "../../../../shared/sdk";
import {Router} from "@angular/router";
import {StorageService} from "../../../../shared/services/storage/storage.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'users-boat-card',
  templateUrl: './users-boat-card.component.html',
  styleUrls: ['./users-boat-card.component.scss']
})
export class UsersBoatCardComponent implements OnInit {
  @Input()
  public boat: BoatOutputDTO={};
  type: string;
  port: string;
  mooring: string;
  requiredFileType: string | undefined;
  file: File | undefined;
  fileName: string = '';

  constructor(private router: Router,
              private storageService: StorageService,
              private boatsService: BoatsService,
              private translate: TranslateService) {
    this.type = '';
    this.port = '';
    this.mooring = '';
  }

  ngOnInit(): void {
    console.log(this.boat);
    let imagen = document.createElement('img');
    imagen.className = 'card-img-top';
    if(this.boat)
      if(this.boat.boatResources)
        if(this.boat.boatResources[0].uri)
          imagen.src = 'https://localhost:44316/Images/'+this.boat.boatResources[0].uri;
    let tarjeta = document.getElementById('tarjeta');
    if(tarjeta)
      tarjeta.insertBefore(imagen,document.getElementById('cuerpoTarjeta'));
    if(this.boat.boatType)
      if(this.boat.boatType.name)
        this.type = this.boat.boatType.name;
    if(this.boat.mooring){
      if(this.boat.mooring.alias)
      this.mooring = this.boat.mooring.alias;
      if(this.boat.mooring.port)
        if(this.boat.mooring.port.name)
        this.port = this.boat.mooring.port.name;
    }

    if(this.boat.boatResources){
      for(let image of this.boat.boatResources){
        if(image.uri){
          let imagen = document.createElement('img');
          imagen.src = 'https://localhost:44316/Images/'+image.uri;
          imagen.style.width = '200px';
          imagen.onclick = () => {
            //Llenar para eliminar imagen
            if(confirm(this.translate.instant('deleteImage'))){
              //this.boatsService.
              if(this.boat.id && image.id)
              this.boatsService.apiBoatsIdResourceResourceIdDelete(this.boat.id, image.id).subscribe({
                next: (res) => {
                  location.reload()
                }
              });
            }
          }
          let carousel = document.getElementById('imagesSlide');
          if(carousel)
            carousel.appendChild(imagen);

        }
      }
    }

  }

  editBoat() {
    //[routerLink]="['/create-boat/'+boat.id]"
    (document.getElementById('closeModal') as HTMLButtonElement).click();
    this.storageService.setItem('boatId', this.boat.id);
    this.router.navigate(['/editBoat']);
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      //const formData = new FormData();
      //formData.append("Imagen", this.file);
      if(this.boat.id != undefined)
      this.boatsService.apiBoatsIdResourceImagePost(this.boat.id, true, this.file).subscribe({
        next: (res) => {
          location.reload();
        }
      });
    }
  }

}
