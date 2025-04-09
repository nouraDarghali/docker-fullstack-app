const { add, subtract } = require('../math');  // Assure-toi que le chemin vers math.js est correct


describe('Tests des fonctions mathématiques', () => {
  
  it('devrait additionner correctement deux nombres', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);  // Vérifie si le résultat est bien 5
  });
  
  it('devrait soustraire correctement deux nombres', () => {
    const result = subtract(5, 3);
    expect(result).to.equal(2);  // Vérifie si le résultat est bien 2
  });

});
