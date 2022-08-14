const newTeachers = [
    { firstName: "Steve", subjects: ["English", "Maths", "History"] },
    { firstName: "Celia", subjects: ["Maths", "Science"] },
  ];
  
  const filterSubject = function(teachers, subject) {
    const filteredTeachers = [];
    for (var i=0; i<=teachers.length-1; i++) {
      const teacher = teachers[i];
      for (var j=0; j<=teacher.subjects.length-1; j++) {
        if (teacher.subjects[j].toLowerCase()== subject.toLowerCase()) {
          filteredTeachers.push(teacher);
        }
      }
    }
    return filteredTeachers;
  }
  console.log(filterSubject(newTeachers, "science"));