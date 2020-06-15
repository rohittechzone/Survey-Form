class Peoples {
  constructor(){
    this.namea = null;
  }

 

  update(){
    var playerIndex = "people/person";
    database.ref(playerIndex).set({
      name:this.namea,
    });
  }


}
