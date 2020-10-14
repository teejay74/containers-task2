import ErrorRepository from '../errorrepository';

test('Тест ошибки 001', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('001');
  expect(recieved).toBe('Ошибка общего характера');
});

test('Тест ошибки 011', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('011');
  expect(recieved).toBe('Недопустимое имя персонажа');
});

test('Тест ошибки 111', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('111');
  expect(recieved).toBe('Персонаж уже добавлен');
});

test('Тест неизвестной ошибки', () => {
  const errorRepository = new ErrorRepository();
  const recieved = errorRepository.translate('0');
  expect(recieved).toBe('Unknown error');
});
