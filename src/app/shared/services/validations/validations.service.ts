import { Injectable } from '@angular/core';
import { ERRORS_VALIDATIONS } from 'src/app/data/constants/errors';
import { ENUM_VALIDATION_OPTION } from 'src/app/data/enum';
import { IResponseValidation } from 'src/app/data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  validateField(value: any, type: ENUM_VALIDATION_OPTION): IResponseValidation {
    switch (type) {
      case ENUM_VALIDATION_OPTION.EMAIL:
        return this.validateEmail(value);
      case ENUM_VALIDATION_OPTION.PASSWORD:
        return this.validatePassword(value);
    }
    return this.validateEmail(value);
  }

  validateEmail(v: any): IResponseValidation {

    const response: IResponseValidation = { msg: '', isValid: true };
    const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]| \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?| \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    response.isValid = pattern.test(v);

    console.log('yeeeeeee');
    response.msg = (v === '') ? ERRORS_VALIDATIONS.EMAIL_REQUIRED_FILE : ERRORS_VALIDATIONS.EMAIL_INVALID;
    if (response.msg === undefined) {
      response.msg = ' pito'
    }

    return response;
  }

  validatePassword(v: any): IResponseValidation {

    console.log('yiiiii');
    const response: IResponseValidation = { msg: '', isValid: true };
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

    response.isValid = pattern.test(v);

    response.msg = (v === '') ? ERRORS_VALIDATIONS.PASSWORD_REQUIRED_FIELD : ERRORS_VALIDATIONS.PASSWORD_iNVALID;



    return response;
  }


}
