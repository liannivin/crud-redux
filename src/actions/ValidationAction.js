import {
  VALIDATE_FORM,
  VALIDATE_FORM_SUCCESS,
  VALIDATE_FORM_FAIL
} from "../types";

export function ValidateForm() {
  return dispatch => {
    dispatch(initializeValidation());
  };
}

export const initializeValidation = () => {
  return {
    type: VALIDATE_FORM
  };
};

export const validateFormSuccess = () => {
  return {
    type: VALIDATE_FORM_SUCCESS
  };
};

export const validateFormFail = () => {
  return {
    type: VALIDATE_FORM_FAIL
  };
};
