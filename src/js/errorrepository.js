export default class ErrorRepository {
  constructor() {
    this.repository = new Map([
      ['001', 'Ошибка общего характера'],
      ['011', 'Недопустимое имя персонажа'],
      ['111', 'Персонаж уже добавлен'],
    ]);
  }

  translate(code) {
    return this.repository.get(code) || 'Unknown error';
  }
}