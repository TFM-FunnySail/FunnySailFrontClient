import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  BoatsService,
  BoatTitleOutputDTO,
  BoatTitleOutputDTOGenericResponseDTO,
  BoatTypeOutputDTO, MooringOutputDTO,
  MooringService,
  PortOutputDTO,
  PortOutputDTOGenericResponseDTO,
  PortService
} from "../../../shared/sdk";

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

  constructor(private formBuilder: FormBuilder,
              private boatsApiService: BoatsService,
              private portService: PortService) {
    this.boatForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      length: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      beam: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      capacity: ['', [Validators.required, Validators.min(0), Validators.max(500)]],
      power: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
      registration: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      type: ['', [Validators.required]],
      titulation: ['', [Validators.required]],
      mooring: ['', [Validators.required]],
      dayBasePrice: ['', [Validators.required, Validators.min(0), Validators.max(3000)]],
      hourBasePrice: ['', [Validators.required, Validators.min(0), Validators.max(3000)]],
      supplement: ['', [Validators.required, Validators.min(0), Validators.max(3000)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]],
      port: ['', [Validators.required]],
    });
    this.setArrays();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.boatForm.value);
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

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      const formData = new FormData();
      formData.append("Imagen", this.file);
    }
  }
}
