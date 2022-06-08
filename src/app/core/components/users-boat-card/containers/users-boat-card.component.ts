import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {
  BoatOutputDTO,
  BoatsService, ScheduleTechnicalServiceDTO, TechnicalServiceOutputDTO,
  TechnicalServiceOutputDTOGenericResponseDTO,
  TechnicalServiceService
} from "../../../../shared/sdk";
import {Router} from "@angular/router";
import {StorageService} from "../../../../shared/services/storage/storage.service";
import {TranslateService} from "@ngx-translate/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'users-boat-card',
  templateUrl: './users-boat-card.component.html',
  styleUrls: ['./users-boat-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersBoatCardComponent implements OnInit {
  @Input()
  public boat: BoatOutputDTO={};
  type: string;
  port: string;
  mooring: string;
  file: File | undefined;
  fileName: string = '';
  tcForm: any;
  newTS: ScheduleTechnicalServiceDTO | any;
  techServs: TechnicalServiceOutputDTO[] = [];
  assignedTechnicalServices: TechnicalServiceOutputDTO[] = [];
  price: number = 0;

  constructor(private router: Router,
              private storageService: StorageService,
              private boatsService: BoatsService,
              private translate: TranslateService,
              private technicalService: TechnicalServiceService,
              private formBuilder: FormBuilder,) {
    this.type = '';
    this.port = '';
    this.mooring = '';

  }

  ngOnInit(): void {
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

    //El technical services hay que pedirlo a parte
    //this.technicalService.
    this.technicalService.apiTechnicalServiceGet(undefined, this.boat.id).subscribe((resp: TechnicalServiceOutputDTOGenericResponseDTO) => {
      if(resp.items){
        for(let R of  resp.items){
            this.assignedTechnicalServices.push(R);
        }
      }
    });

    this.tcForm = this.formBuilder.group({
      techServ: [Validators.required]
    });

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

  bookTechnicalService() {

  }

  Alert() {
    (document.getElementById('serviceBoat') as HTMLDivElement).style.display = 'block';
    (document.getElementById('boatData') as HTMLDivElement).style.display = 'none';

    this.technicalService.apiTechnicalServiceGet().subscribe((resp: TechnicalServiceOutputDTOGenericResponseDTO) => {
      if(resp.items){
        for(let R of  resp.items){
          if(R.active == true)
            this.techServs.push(R);
        }
      }
    });
  }

  Back(){
    (document.getElementById('serviceBoat') as HTMLDivElement).style.display = 'none';
    (document.getElementById('boatData') as HTMLDivElement).style.display = 'block';
  }

  onSubmit() {
    this.technicalService.apiTechnicalServiceSchedulePost(this.newTS).subscribe((resp:any)=>{});

  }

  updatePrice() {
    if(this.techServs)
      this.newTS = this.techServs.filter(a => a.id == this.tcForm.get('techServ')?.value)[0];

    let today = new Date();
    let dd = today.getDate() + 7;
    today.setDate(dd);
    this.newTS = {
      boatId: this.boat.id,
      technicalServiceId: parseInt(this.tcForm.get('techServ')?.value),
      price: this.newTS.price,
      serviceDate: today
    }
    this.price = this.newTS.price;
  }
}
