"use strict";
class Student {
    constructor(name = "NEW Customer", sat, major) {
        this.name = name;
        this.sat = sat;
        this.active = true;
        this.major = major;
    }
    newStudent() {
        let tr = $("<tr></tr>");
        let tName = `<td>${this.name}</td>`;
        let tSAT = `<td>${this.sat}</td>`;
        let tActive = `<td>${this.active}</td>`;
        let tMajor = `<td>${this.major}</td>`;
        return tr.html(tName + tSAT + tActive + tMajor);
    }
}
let students = [
    new Student("Bob", 1400, "General Studies"),
    new Student("Jim Bob", 1300, "General Studies"),
    new Student("Joe Bob", 1200, "General Studies"),
    new Student("Bob II", 1100, "General Studies"),
    new Student("Billy Bob", 1000, "General Studies")
];
const load = () => {
    $("#tbody").html("");
    for (let student of students) {
        $("#tbody").append(student.newStudent());
    }
};
