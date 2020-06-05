import { ValidationError } from 'yup';

interface ValidationErrorMessage {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError
): ValidationErrorMessage {
  const validationErrors: ValidationErrorMessage = {};
  err.inner.forEach(e => {
    validationErrors[e.path] = e.message;
  });
  return validationErrors;
}
