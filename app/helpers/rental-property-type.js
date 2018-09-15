import {
  helper
} from '@ember/component/helper';

const types = ["Condo", "Townhouse", "Apartment"]


export function rentalPropertyType([propertyType]) {
  if (types.includes(propertyType)) {
    return "Community";
  }
  return "Standalone"
}

export default helper(rentalPropertyType);
