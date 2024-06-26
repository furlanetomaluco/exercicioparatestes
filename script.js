menu = prompt(`
Opções:

1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão
5 - Sair
`);

switch (menu) {
  case "1":
    x = prompt("Digite um número");
    y = prompt("Digite outro número");
    alert(`O resultado é: ${x + y}`);
    break;
  case "2":
    x = prompt("Digite um número");
    y = prompt("Digite outro número");
    alert(`O resultado é: ${x - y}`);
    break;
  case "3":
    x = prompt("Digite um número");
    y = prompt("Digite outro número");
    alert(`O resultado é: ${x * y}`);
    break;
  case "4":
    x = prompt("Digite um número");
    y = prompt("Digite outro número");
    alert(`O resultado é: ${x % y}`);
    break;
  case "5":
    alert("Saindo do programa...");
    break;
  default:
    alert("Selecione uma opção válida!");
}
