import Swal from 'sweetalert2';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }

  notifySuccess(message: string) {
    Swal.fire({
      title: "Success",
      text: message,
      icon: "success",
      customClass: {
        confirmButton: "modal-button",
      },
      buttonsStyling: false
    }) 
  }

  notifyError(message: string) {
    Swal.fire({
      title: "Error",
      text: message,
      icon: "error",
      customClass: {
        confirmButton: "modal-button",
      },
      buttonsStyling: false
    }) 
  }
}
