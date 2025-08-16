interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintFirstLetter {
  (first: string, last: string): string;
}

const printTeacher: PrintFirstLetter = (first, last) => {
  console.log(`${first[0]}, ${last}`);
  return `${first[0]}, ${last}`;
};
