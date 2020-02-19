const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
  }];

  // Task#1

  const getSubjects = (student) => {
    return Object.keys(student.subjects).map((el) => {
        const replace = /_/;
        let str = '';
        for (let i = 0; i < el.length; i++) {
            if (i == 0) {
                str += el[i].toUpperCase();
            } else {
                str += el[i];
            }
        }
        if (str.match(replace)) {
            str = str.replace(replace, ' ');
        }
        return str;
    });
}
console.log(getSubjects(students[0]));

//Task#2

const getAverageMark = (student) => {
    const studentsResult = Object.values(student.subjects).flat();
    return (studentsResult.reduce((sum, item) => {
      sum += item
      return sum
    },0)/studentsResult.length).toFixed(2);
  }
  
console.log(getAverageMark(students[0]));

//Task#3

const getStudentInfo = (student) => {
    const {course, name} = student;
    const objStudentInfo = {
        course,
        name,
        averageMark: getAverageMark(student),
    };
    return objStudentInfo;
}
console.log(getStudentInfo(students[0]));

//Task#4

const getStudentsNames = (students) => {
    return students.map((obj, i) => students[i].name).sort();
}
console.log(getStudentsNames(students));

//Task#5

const getBestStudent = (students) => {
    let maxMark = 0;
    return students.map(studentObj => getStudentInfo(studentObj)).reduce((name, el) => {
        if (maxMark < el.averageMark) {
            maxMark = el.averageMark;
            name = el.name;
        }
        return name;
    }, '');
}
console.log(getBestStudent(students));

//Task#6

const calculateWordLetters = (word)=>{
    let arr = word.split("");
     let objLetters  = {};
     arr.forEach(current => {
       const count = arr.filter(letter => letter === current).length;
       objLetters [current] = count;
     });
    
     Object.entries(objLetters ).map(([letter, number]) => {
     });
     return objLetters ;
   }
   console.log(calculateWordLetters('test'));