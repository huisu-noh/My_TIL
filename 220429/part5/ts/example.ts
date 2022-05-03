abstract class AbstractPerson {
  protected _name: string = "soo";

  abstract setName(name: string): void;
}

// new AbstractPerson()

class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person();
p.setName();
