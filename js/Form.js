class Form {

  constructor() {
    this.name = createInput("");
    this.email = createInput("");
    this.submit = createButton('Submit');
    this.male = createButton('Male');
    this.female = createButton('Female');
    this.greeting = createElement('h2');
    this.Email = createElement('h5');
    this.Name = createElement('h3');
    this.Gender = createElement('h3');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Survey Form");
    title.position(70, 0);

    //var Name = createElement('h3')
    this.Name.html("Names :");
    this.Name.position(13, 60);

    //var Email = createElement('h5')
    this.Email.html("Email ID :");
    this.Email.position(15, 132);

    //var Gender = createElement('h3')
    this.Gender.html("Gender :");
    this.Gender.position(15, 202);

    this.name.position(80, 80);
    this.submit.position(115, 400);
    this.male.position(100, 222);
    this.female.position(170, 222);
    this.email.position(80, 150);

    this.submit.mousePressed(()=>{
      this.name.hide();
      this.submit.hide();
      this.male.hide();
      this.female.hide();
      this.email.hide();
      this.greeting.hide();
      this.Name.hide();
      this.Email.hide();
      this.Gender.hide();
      var greetings = createElement('h3')
      greetings.html("Thank you for submiting");
      greetings.position(35, 200);
      people.namea = this.name.value();
     people.update();
    });
    this.male.mousePressed(()=>{
      gender = "male";
    });
    this.female.mousePressed(()=>{
      gender = "female";
    });
  }
}
