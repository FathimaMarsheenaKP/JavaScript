st = {
    // states
    roll: 101,
    name: "rahul",
    cgpa: 7.7,
    // behaviours
    study:function() {
        console.log("study to upskill");
    },
    intro:function() {
        console.log("ROll: " + this.roll + " Name: " + this.name + " CGPA: " + this.cgpa);
        
    }
}

st.study()
st.intro()