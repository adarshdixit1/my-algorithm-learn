
interface GetErrorProps {
    value: string;
    condition: {
      validation: {
        isRequire?: boolean;
        errorText: string;
        maxTextLength?: number;
      };
    };
  }

const validationFunctions: Record<string, (value: string, errorText: string, maxTextLength?: number) => string> = {
    nhsNumber: (value, errorText) => value.length !== 12 ? errorText : "",
    // isEmail: (value, errorText) => !emailRegex.test(value) ? errorText : "",
    isMobileNumber: (value, errorText) => value.length !== 10 || isNaN(Number(value)) ? errorText : "",
    // postcode: (value, errorText) => !postcodeRegex.test(value) ? errorText : "",
    textLength: (value, errorText, maxTextLength) => value.length > (maxTextLength || 500) ? errorText : "",
  };



export const getError = ({ value, condition }: GetErrorProps): string => {
  const validation = condition?.validation || {};

  if (validation.isRequire && !value) return "This is a required value";

  for (const [key, validate] of Object.entries(validationFunctions)) {
    if (validation.hasOwnProperty(key)) {
        const validationValue = validation[key as keyof typeof validation];
      if (validationValue && validate(value, validation.errorText, validation.maxTextLength)) {
        return validate(value, validation.errorText, validation.maxTextLength);
      }
    }
  }

  return "";
};