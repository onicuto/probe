"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
class People {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    clean;
    eat() {
        return true;
    }
    ;
    washUp() {
        if (this.clean) {
            this.clean = true;
            return true;
        }
        return false;
    }
    go() {
        console.log("Пошёл");
    }
}
class Laborant extends People {
    exp;
    nameLaboratory;
    constructor(name, age, exp, nameLaboratory) {
        super(name, age);
        this.exp = exp;
        this.nameLaboratory = nameLaboratory;
    }
    experiment(experimentName) {
        return experimentName;
    }
}
let Student = (() => {
    let _classDecorators = [ShowGrades];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = People;
    var Student = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Student = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        grade = [];
        //   public year: number = 2026;
        constructor(name, age, grade) {
            super(name, age);
            this.grade = grade;
            //        this.year = year;
        }
    };
    return Student = _classThis;
})();
class StudentIngenering extends Student {
    constructor(name, age, grade) {
        super(name, age, grade);
    }
}
function getTopic(constructor) {
    constructor.prototype.getTopic = function () {
        return this.topic;
    };
}
let MasterStudent = (() => {
    let _classDecorators = [getTopic];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Student;
    var MasterStudent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MasterStudent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        topic;
        constructor(name, age, grade, topic) {
            super(name, age, grade);
            this.topic = topic;
        }
        defend() {
            console.log(`${this.name} защищает диплом по теме: ${this.topic}`);
        }
    };
    return MasterStudent = _classThis;
})();
const master = new MasterStudent("Иван", 23, [5, 5, 4], "Нейросети");
master.defend();
const student = new Student("Иван", 19, [5, 5, 5, 5, 5, 5]);
console.log(student.GetYear);
student.showGrades();
const people = {
    age: 23,
    firstName: "Nikita",
    lastName: "Petrov",
    middleName: "Vasya",
    country: "Russia",
    datOfBirth: new Date("2022-05-01T00:00:00.000Z")
};
function ShowGrades(constructor) {
    constructor.prototype.showGrades = function () {
        console.log("Оценки студента:", this.grade.join(", "));
    };
}
class Teacher extends People {
    subject = "Web";
    salary = 0;
    constructor(name, age, salary, subject) {
        super(name, age);
        this.subject = subject;
        this.salary = salary;
    }
}
const teacher = new Teacher("Иван", 45, 35000, "math");
const newTeacher = new Teacher("Петр", 35, 3500, "web");
class Lector extends Teacher {
    constructor(name, age, subject, salary) {
        super(name, age, salary, subject);
    }
    giveLecture() {
        console.log(this.name + ' - лекция ' + this.subject);
    }
}
