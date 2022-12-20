interface Student {
    name: string;
    lastName: string;
    age: number;
    grade?: number;
}
// _____________________
let readonlyStudent: Readonly<Student> = {
    name: "John",
    lastName: "Doe",
    age: 14,
    grade: 2
}
// readonlyStudent.name = "Someonenew" : Error

// _____________________
let requiredStudent: Required<Student> = {
    name: "S",
    lastName: "S",
    age: 14,
    grade: 1
}

// _____________________
let partialStudent: Partial<Student> = {
    name: "John",
}

// _____________________
let recordedStudent: Record<string, Student> = {
    1: { name: "J", lastName: "S", age: 12 },
    2: { name: "J", lastName: "S", age: 12 },
}

// _____________________
let pickedStudent: Pick<Student, "name" | "lastName"> = {
    name: "John",
    lastName: "Doe",
}

// _____________________
let omittedStudent: Omit<Student, "grade" | "name"> = {
    age: 14,
    lastName: 'sfd'
}

// _____________________
type nonNull = NonNullable<string | number | null | undefined>;

let someName: nonNull = 1;

function concatString(s1: string, s2: string): string {
    return s1 + s2
}

// _____________________
type funcParams = Parameters<typeof concatString>;

let params: funcParams = ["2", "e"]


function add(num1: number, num2: number): number {
    return num1 + num2
}

// _____________________
type retType = ReturnType<typeof add>;

let num: retType = 2

// _____________________
class Coordinates {
    lat: string;
    long: string;
}

type cordinateType = InstanceType<typeof Coordinates>;
let c1 = new Coordinates()
c1.lat = "df";
c1.long = 'something else';
let c2: cordinateType = { lat: "", long: "" }