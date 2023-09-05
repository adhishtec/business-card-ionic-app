import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { CameraResultType, CameraSource, CameraPhoto } from '@capacitor/camera';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  async takePicture(): Promise<CameraPhoto> {
    const image = await Camera['getPhoto']({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    return image;
  }
}
