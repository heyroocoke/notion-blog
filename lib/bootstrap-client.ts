const ASCIIArt = `
Jang Eunsu
`;

export function bootstrap() {
  console.log(
    '%c%s',
    'color:#E7B857;font-size:18px;',
    '🚧 ----------------------------------------------------------------------- 🚧',
  );
  console.log('%c%s', 'color:#E7B857;', ASCIIArt);
  console.log(
    '%c%s',
    'color:#E7B857;font-size:18px;',
    '🚧 ----------------------------------------------------------------------- 🚧',
  );
}
