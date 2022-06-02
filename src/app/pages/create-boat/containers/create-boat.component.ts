import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  AddBoatInputDTO, BoatOutputDTO,
  BoatsService,
  BoatTitleOutputDTO,
  BoatTitleOutputDTOGenericResponseDTO,
  BoatTypeOutputDTO, MooringOutputDTO,
  PortOutputDTO,
  PortOutputDTOGenericResponseDTO,
  PortService
} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'create-boat',
  templateUrl: './create-boat.component.html',
  styleUrls: ['./create-boat.component.scss']
})
export class CreateBoatComponent implements OnInit {
  boatForm: FormGroup;
  boatTypes: BoatTypeOutputDTO[] = [];
  titulations: BoatTitleOutputDTO[] = [];
  ports: PortOutputDTO[] = [];
  port: PortOutputDTO | undefined;
  moorings: MooringOutputDTO[] = [];
  requiredFileType: string | undefined;
  file: File | undefined;
  fileName: string = '';

  boatId: string | null = null;
  header: Boolean = true;

  constructor(private formBuilder: FormBuilder,
              private boatsApiService: BoatsService,
              private portService: PortService,
              private storageService: StorageService) {
    this.boatForm = this.formBuilder.group({});
    this.buildForm();
    if(this.storageService.getItem("boatId")){
      this.fillForm()

    }else{
      this.updateMoorings();
    }

  }

  ngOnInit(): void {
  }

  onSubmit() {
    let boat: AddBoatInputDTO;
    boat = {
      name: this.boatForm.get('name')?.value,
      boatTypeId: parseInt(this.boatForm.get('boatTypeId')?.value),
      description: this.boatForm.get('description')?.value,
      registration: this.boatForm.get('registration')?.value,
      mooringPoint: this.boatForm.get('mooringPoint')?.value,
      length: parseInt(this.boatForm.get('length')?.value),
      sleeve: parseInt(this.boatForm.get('sleeve')?.value),
      capacity: parseInt(this.boatForm.get('capacity')?.value),
      motorPower: parseInt(this.boatForm.get('motorPower')?.value),
      dayBasePrice: parseInt(this.boatForm.get('dayBasePrice')?.value),
      hourBasePrice: parseInt(this.boatForm.get('hourBasePrice')?.value),
      supplement: parseInt(this.boatForm.get('supplement')?.value),
      mooringId: parseInt(this.boatForm.get('mooringPoint')?.value),
      ownerId: this.storageService.getItem('userId'),
      requiredBoatTitles: [parseInt(this.boatForm.get('requiredBoatTitles')?.value)],
      resourcesIdList: []
    };

    this.boatsApiService.apiBoatsPost(boat).subscribe((resp: BoatOutputDTO) => {
      if(resp.id){
        this.boatsApiService.apiBoatsIdResourceImagePost(resp.id, true,this.file).subscribe((resp: any) => {

        }, (error: any) => {
          console.log(error);
        });
      }
    });
  }

  private setArrays() {
    this.boatsApiService.apiBoatsTypesGet()
      .subscribe((resp: BoatTypeOutputDTO[]) => {
        this.boatTypes = resp;
      }
    );

    this.boatsApiService.apiBoatsRequiredTitlesGet().subscribe((resp: BoatTitleOutputDTOGenericResponseDTO) => {
      console.log(resp);
      if(resp.items)
        for(let title of resp.items) {
          this.titulations.push(title);
        }
    });

    this.portService.apiPortGet().subscribe((resp: PortOutputDTOGenericResponseDTO) => {
      console.log(resp);
      if(resp.items)
        for(let port of resp.items) {
          this.ports.push(port);
        }
    });
  }

  buildForm(){
    this.boatForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]],
      registration: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      mooringPoint: ['', [Validators.required]],
      length: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      sleeve: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      capacity: ['', [Validators.required, Validators.min(0), Validators.max(500)]],
      motorPower: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
      boatTypeId: ['', [Validators.required]],
      dayBasePrice: ['', [Validators.required, Validators.min(0), Validators.max(3000)]],
      hourBasePrice: ['', [Validators.required, Validators.min(0), Validators.max(3000)]],
      supplement: ['', [Validators.required, Validators.min(0), Validators.max(3000)]],
      requiredBoatTitles: ['', [Validators.required]],
      port: ['', [Validators.required]],
    });
    this.setArrays();
  }

  updateMoorings() {
    this.moorings = [];
    if(this.ports[this.boatForm.get('port')?.value])
      this.port = this.ports[this.boatForm.get('port')?.value];
      if(this.port?.moorings)
        for(let mooring of this.port.moorings) {
          if(mooring.available)
            this.moorings.push(mooring);
        }
  }

  updateMoorings2(idPort: number) {
    this.moorings = [];
    this.portService.apiPortGet(idPort).subscribe((resp: PortOutputDTOGenericResponseDTO) => {
      if(resp.items)
        if(resp.items[0].moorings)
          for(let mooring of resp.items[0].moorings) {
            this.moorings.push(mooring);
          }
    });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      const formData = new FormData();
      formData.append("Imagen", this.file);
    }
  }
//Edit - from now on hee hee
  fillForm(){
    if(this.storageService.getItem("boatId") != null){
      this.boatId = this.storageService.getItem("boatId");
      this.header = false;
    }
    if(this.boatId)
      this.boatsApiService.apiBoatsIdGet(parseInt(this.boatId)).subscribe((resp: BoatOutputDTO) => {
        console.log(resp);
        this.boatForm.patchValue(resp);
        this.boatForm.get('boatTypeId')?.setValue(resp.boatType?.id?.toString());
        if(resp.requiredBoatTitles)
          if(resp.requiredBoatTitles[0].titleId)
            this.boatForm.get('requiredBoatTitles')?.setValue(resp.requiredBoatTitles[0]?.titleId?.toString());
        if(resp.mooring?.portId)
          this.updateMoorings2(resp.mooring?.portId);
        if(resp.mooring){
          this.boatForm.get('port')?.setValue(resp.mooring.portId?.toString());
          this.boatForm.get('mooringPoint')?.setValue(resp.mooring.id?.toString());
        }

      });
  }
}
