export function getAge() {
  let dateOfBirth = new Date(2004, 5, 1);
  let now = new Date();

  let birthYear = dateOfBirth.getFullYear();
  let yearNow = now.getFullYear();

  let age = yearNow - birthYear;

  let birthMonth = dateOfBirth.getMonth();
  let monthNow = now.getMonth();

  if (monthNow < birthMonth) {
    age--;
  } else if (monthNow === birthMonth) {
    dateOfBirth = dateOfBirth.getDate();
    now = now.getDate();

    if (now < dateOfBirth) {
      age--;
    }
  }

  return age;
}