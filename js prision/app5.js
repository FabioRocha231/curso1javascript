let cargo ='';

switch (cargo) {
  case 'Programador Junior':
    console.log('o programador junior recebe 4.000 reais');
    break;
    case 'Programador Pleno':
      console.log('o programador senior recebe 5.000 reais');
    break;
    case 'Programador Senior':
      console.log('O programador senior receb 6.000 reais');
      break;
    case 'Testador':
      console.log('o Testador recebe 5.000 reais');
      break;
    case 'Arquiteto':
      console.log('o Arquiteto recebe 8.000 reais');
      break;
      case 'Gerente':
      console.log(' O Gerente recebe 10.000 reais.');
      break;
  default:
    console.log('cargo nao cadastrado no sistema')
}

let emailValido = true;
let senhaValida = true;

let credenciaisValidas = emailValido ? (senhaValida ? 'Credenciais Validas' : 'credenciais invalidas') : 'email invalido';

console.log(credenciaisValidas);