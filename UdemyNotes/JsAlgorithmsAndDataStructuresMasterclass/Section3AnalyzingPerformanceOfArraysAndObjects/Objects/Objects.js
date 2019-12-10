let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favNums: [7, 21, 28]
};

if (instructor.firstName === "Kelly") {
  console.log("yay");
  instructor.lastName = "Rippa";
  console.log(Object.keys(instructor));
}
