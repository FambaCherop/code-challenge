function calculateGrade(grade)
{

if (grade >= 80 && grade <= 100) {
    return ("A");
}

else if (grade >= 60 && grade <= 79) {
    return ("B");
}

else if (grade >= 50 && grade <= 59){
    return ("C");
}

else if (grade >= 40 && grade <= 49){
    return ("D");
}

else if  (grade >=0 && grade <=39){
    return ("E");
}

else (grade < 0 || grade > 100) 
return ("Invalid input. Please enter valid marks between 0 and 100");


}

function GradeCounter() 
{
    let total = (calculateGrade);
    console.log("Type in your marks here: ");

    if (total = calculateGrade(56) ) {
    return (`The student's grade is: ${total}`);
    }
}

    const result = GradeCounter();
    console.log(result);