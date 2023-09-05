import { Component } from '@angular/core';
import { CameraResultType, CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';
const { Camera } = Plugins;
import { BusinessCardService } from '../service/business-card.service';
import { BusinessCard } from '../interfaces/businessCard'
import { of } from 'rxjs';
import { FormGroup, Validators , FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ionicForm: FormGroup;
  frontB64Image = ''
  backB64Image = ''
  businessCard: BusinessCard;
  businessCardKeys : string[] = [];;
  loading = of(false);
  constructor(private businessCardService: BusinessCardService) { }

  ngOnInit() {
    this.ionicForm = new FormGroup({
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      email: new FormControl('',  [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]),
      fax: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      organization: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      street2: new FormControl('', [Validators.required]),
      vat: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      imageOrientation: new FormControl('', [Validators.required]),
    });
  }

  async openCamera(type: string) {
    try {
      const image = await Camera['getPhoto']({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });

      if (type === 'front') {
        this.frontB64Image = image.base64String;
      } else {
        this.backB64Image = image.base64String;
      }
    } catch (error) {
      console.error('Error opening camera:', error);
    }
  }

  fetchBusinessCardDetails() {
    this.loading = of(true);
    
    this.businessCardService.uploadBusinessCard(this.frontB64Image, this.backB64Image).subscribe(
      (response) => {
        this.loading = of(false);
        this.businessCard = response;
        this.businessCardKeys = Object.keys(this.businessCard)
        this.ionicForm.setValue({
          city: this.businessCard.contact.city,
          country: this.businessCard.contact.country,
          firstName: this.businessCard.contact.firstName,
          lastName: this.businessCard.contact.lastName,
          organization: this.businessCard.contact.organization,
          imageOrientation:this.businessCard.imageOrientation,
          text:this.businessCard.text,
          email: this.businessCard.contact.email,
          fax: this.businessCard.contact.fax,
          gender: this.businessCard.contact.gender,
          mobile: this.businessCard.contact.mobile,
          phone: this.businessCard.contact.phone,
          position: this.businessCard.contact.position,
          state: this.businessCard.contact.state,
          street: this.businessCard.contact.street,
          street2: this.businessCard.contact.street2,
          vat: this.businessCard.contact.vat,
          website:this.businessCard.contact.website,
          zip: this.businessCard.contact.zip,
        });
      },
      (error) => {
        this.loading = of(false);
        alert(`Failed to fetch details: ${error}`)
      });
  }

  checkType(val: any){
    return typeof val;
  }
  
  getKeys(obj: any){
    return Object.keys(obj)
  }
}
