// Лабораторная работа N3
enum City {
  Moscow,
  NizhnyN
}

interface peopleType  {
  age: any;
  firstName: string;
  lastName: string;
  middleName: string|null;
  country: string|null;
  datOfBirth: Date;
  city: City;
}

const people: peopleType ={
  city: City.Moscow,
  age:23,
  firstName:"Nikita",
  lastName:"Petrov",
  middleName:"Vasya",
  country:"Russia",
  datOfBirth: new Date("2022-05-01T00:00:00.000Z")
}

const oldPeople: peopleType ={
    city: City.NizhnyN,
    age: "девятнядцать",
    firstName:"Artem",
    lastName: "Smirnov",
    middleName:null,
    country: null,
    datOfBirth: new Date("2022-05-01T00:00:00.000Z")
}
function getCity(person: peopleType): City {
  return person.city;
}

console.log(getCity(people));
console.log(getCity(oldPeople));

//Лабораторная работа N4
class People {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    private clean: boolean | undefined;

    public eat(): boolean {
        return true;
    };

    public washUp(): boolean{
        if (this.clean){
            this.clean = true;
            return true;
        }
        return false;
    }

    public go(): void {
        console.log("Пошёл");
    }
}

class Laborant extends People {
    exp: number;
    nameLaboratory: string;
    constructor(name: string, age: number, exp: number, nameLaboratory: string) {
        super(name, age);
        this.exp = exp;
        this.nameLaboratory = nameLaboratory;
    }
    public experiment(experimentName: string): string {
        return experimentName;
    }
}

@ShowGrades
class Student extends People {
  protected grade: number[] = [];
  constructor(name: string, age: number, grade: number[]) {
    super(name, age);
    this.grade = grade;
  }
}

@getTopic
class MasterStudent extends Student {
  protected topic : string;
  constructor(name: string, age: number, grade: number[], topic:string) {
    super(name, age, grade);
    this.topic = topic;
  }
  defend(): void {
    console.log(`${this.name} защищает диплом по теме: ${this.topic}`);
  }
}

class EngenierStudent extends Student{
    constructor(name: string, age: number, grade: number[]) {
        super( name, age, grade);
    }

    readScheme(matrix: number[][]): void{
        console.log("устал");
        for (let i = 0; i < matrix.length; i++){
            let row: string = "";
            for (let j = 0; j < matrix[i].length; j++){
                row += matrix[i][j] + "\t";
            }
            console.log(row);
        }
    }

}

interface salaryType {
  count: number,
  currency: string
}

class Teacher extends People{
  public subject: string;
  public salary: salaryType;
  constructor(name: string, age: number, salary: salaryType, subject: string) {
    super(name, age);
    this.subject = subject;
    this.salary = salary;
  }
}

class Lector extends Teacher {
  constructor (name: string, age: number, subject: string, salary: salaryType) {
    super(name, age, salary, subject);
  }
  public getLecture(): string {
    return (this.name + ' - лекция ' + this.subject);
  }
}

function getTopic(constructor: Function) {
    constructor.prototype.getTopic = function():string {
        return this.topic;
    }
}

function ShowGrades(constructor: Function): void {
  constructor.prototype.showGrades = function (
    this: { grade: number[] }
  ): void {
    console.log("Оценки студента:", this.grade.join(", "));
  };
}


const master = new MasterStudent("Иван", 23, [5,5,4],"Нейросети");
master.defend();
(<any>master).getTopic();

const student = new Student("Иван", 19, [5,5,5,5,5,5]);
console.log((<any>student).GetYear);

(student as any).showGrades();

const salary: salaryType = {
  count: 100000,
  currency: 'USD'
}

const teacher = new Teacher("Иван", 45, salary, "math");

const newTeacher = new  Teacher("Петр", 35,salary,"web" );

const newLector = new Lector("ivan",45,"WEB",salary);
console.log(newLector.getLecture);
const YoungLaborant = new Laborant("Alex", 25, 2, "ISU");
YoungLaborant.eat();
YoungLaborant.go();
YoungLaborant.washUp();
YoungLaborant.experiment("Запуск локального LLM")

const newStudentEngenier = new EngenierStudent("Иван", 20, [5, 3, 3, 2]);
newStudentEngenier.readScheme([[1, 2, 1], [1, 2, 3]]);


