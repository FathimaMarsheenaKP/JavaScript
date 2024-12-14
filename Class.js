class Student {
    // constructor
    constructor(roll, name, cgpa) {
        // states
        this.roll = roll
        this.name = name;
        this.cgpa = cgpa
    }
    // behaviours
    study() {
        console.log("study to upskill");
    }
    intro() {
        console.log("ROll: " + this.roll + " Name: " + this.name + " CGPA: " + this.cgpa);
    }
}
st = new Student(101, "Rahul", 7.79);
st.study()
st.intro()