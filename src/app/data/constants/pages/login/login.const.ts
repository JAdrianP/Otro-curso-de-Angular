import { ENUM_VALIDATION_OPTION } from "src/app/data/enum";
import { IField, IResponseValidation } from "src/app/data/interfaces";
import { ValidationsService } from "src/app/shared/services/validations/validations.service";
import { ERRORS_VALIDATIONS } from "../../errors";

export const CONST_LOGIN_PAGE :{

    FORM:{
        email: IField;
        password: IField;
    }   
} = {

    FORM: {
        email:{
            val : '',
            error:ERRORS_VALIDATIONS.EMAIL_REQUIRED_FILE,
            isValid(){
                const validationsService = new ValidationsService();
                const validateEmail : IResponseValidation = validationsService.validateField(this.val, ENUM_VALIDATION_OPTION.EMAIL);
                this.error = validateEmail.msg;
                return validateEmail.isValid;
            }
        },
        password:{
            val : '',
            error:ERRORS_VALIDATIONS.PASSWORD_REQUIRED_FIELD,
            isValid(){
                const validationsService = new ValidationsService();
                const validatePassword : IResponseValidation = validationsService.validateField(this.val, ENUM_VALIDATION_OPTION.PASSWORD);
                this.error = validatePassword.msg;
                return validatePassword.isValid;
            }
        }
    }
}