import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef
} from '@angular/material/snack-bar';
import { NotificationEnum } from '@app/core/enums/notification.enum';

@Injectable({providedIn: 'root'})
export class NotificationService {

    private snackBarConfig: MatSnackBarConfig;
    private snackBarRef: MatSnackBarRef<any>;
    private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    private verticalPosition: MatSnackBarVerticalPosition = 'top';
    private snackBarAutoHide = '1500';

    constructor(private snackBar: MatSnackBar) { }
    
    notify(message:string, type:NotificationEnum) : MatSnackBarRef<any>{
        let panelClass = '';
        switch(type){
            case NotificationEnum.Info:
                panelClass = 'notify-info'; break;
            case NotificationEnum.Success:
                panelClass = 'notify-success'; break;
            case NotificationEnum.Warning:
                panelClass = 'notify-warning'; break;
            case NotificationEnum.Error:
                panelClass = 'notify-error'; break;
        }
        this.snackBarConfig = new MatSnackBarConfig();
        this.snackBarConfig.horizontalPosition = this.horizontalPosition;
        this.snackBarConfig.verticalPosition = this.verticalPosition;
        this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
        this.snackBarConfig.panelClass = panelClass;
        this.snackBarRef = this.snackBar.open(message, 'Close', this.snackBarConfig);
        return this.snackBarRef;
    }
}