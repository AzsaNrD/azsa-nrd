export function convertDate(stringDate = '') {
  if (stringDate === '') return '';
  
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const date = new Date(stringDate);
  const result = date.toLocaleDateString('id-ID', options);
  
  return result;
}