class Student {
    name:string;
    sat:number;
    active:boolean;
    major:string;
    constructor(name:string,
                sat:number,
                major:string = "General Studies",
                active:boolean = true) {
        this.name = name;
        this.sat = sat;
        this.active = active;
        this.major = major;
    }
    newStudent():string {
        let tr = $("<tr></tr>");
        let tName = `<td>${this.name}</td>`;
        let tSAT = `<td>${this.sat}</td>`;
        let tActive = `<td>${this.active ? "Y" : "N"}</td>`;
        let tMajor = `<td>${this.major}</td>`;
        return tr.html(tName + tSAT + tActive + tMajor).toString();
    }
}
let students:Student[] = [
    new Student("Bob", 1400),
    new Student("Jim Bob", 1300),
    new Student("Joe Bob", 1200),
    new Student("Bob II", 1100),
    new Student("Billy Bob", 1000)
]
const load = () => {
    $("#tbody").html("");
    for (let student of students) {
        $("#tbody").append(student.newStudent());
    }
}