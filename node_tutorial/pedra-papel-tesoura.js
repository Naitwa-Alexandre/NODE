const game = (move) => {
  const AImove = ['Pedra', 'Papel', 'Tesoura'];
  
  const randomIdx = Math.floor(Math.random() * AImove.length);

  const randomMove = AImove[randomIdx];

  if (randomMove === move) return console.log('empate, tente novamente');

  if (move === 'Pedra' && randomMove === 'Tesoura') return console.log(`your move: ${ move }, and my ${ randomMove }, danm it!! You win`);
  
  if (move === 'Pedra' && randomMove === 'Papel') return console.log(`your move: ${ move }, and my ${ randomMove }, woot!! You lose`);
  
  if (move === 'Papel' && randomMove === 'Pedra') return console.log(`your move: ${ move }, and my ${ randomMove }, danm it!! You win`);
  
  if (move === 'Papel' && randomMove === 'Tesoura') return console.log(`your move: ${ move }, and my ${ randomMove }, woot!! You lose`);

  if (move === 'Tesoura' && randomMove === 'Papel') return console.log(`your move: ${ move }, and my ${ randomMove }, danm it!! You win`);
  
  if (move === 'Tesoura' && randomMove === 'Pedra') return console.log(`your move: ${ move }, and my ${ randomMove }, woot!! You lose`);
}

//Escreva o parametro entre Pedra, Papel e Tesoura e jogue com essa AI super avancada!!! SOQ! hahaha
game('Tesoura');