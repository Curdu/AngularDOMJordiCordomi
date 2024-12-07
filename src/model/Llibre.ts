export class Llibre {


  private titol: string;
  private tematiques: string[];


  constructor(titol: string, ...tematiques: string[]) {
    this.titol = titol;
    this.tematiques = tematiques;
  }

  getTitol(): string {
    return this.titol;
  }
  setTitol(titol: string): void {
    this.titol = titol;
  }
  getTematiques(): string[] {
    return this.tematiques;
  }
  setTematiques(...tematiques: string[]): void {
    this.tematiques = tematiques;
  }

}
