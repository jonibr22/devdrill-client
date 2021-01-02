import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProfilePicture } from "@app/interfaces/i-profile-picture.interface";
import { environment } from "@environments/environment";

@Injectable()
export class ProfilePictureHelper{
    constructor(
        private http: HttpClient
    ){}
    createImageFromBlob(image: Blob, ref: IProfilePicture) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
           ref.pictureUrl = reader.result;
        }, false);
        if(image){
           reader.readAsDataURL(image);
        }
    }

    setUnknownUrl(ref: IProfilePicture){
        ref.pictureUrl = "assets/pp-unknown.png";
    }

    getPhoto(userId: number){
        return this.http.get<any>(`${environment.apiUrl}/user/${userId}/avatar`,{ responseType: 'blob' as 'json'});
    }

    uploadPhoto(form: FormData, userId: number){
        return this.http.post<any>(`${environment.apiUrl}/user/${userId}/avatar/upload`,form);
    }
}