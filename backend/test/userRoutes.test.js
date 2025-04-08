const request = require('supertest');
const app = require('../server');  // Assure-toi que le chemin du fichier `server.js` est correct
const expect = require('chai').expect;

describe('Test de la route GET /', () => {
    it('devrait retourner une liste d\'utilisateurs avec le code 200', (done) => {
      request(app)
        .get('/')  // Route GET qui récupère les utilisateurs
        .expect(200)  // Attendre un code de statut 200
        .end((err, res) => {
          if (err) return done(err);
  
          // Afficher la réponse (la liste des utilisateurs) dans la console
          console.log("Réponse de l'API:", res.body);
  
          // Vérifier que la réponse est un tableau
          expect(res.body).to.be.an('array');
  
          // Vérifier que le tableau contient au moins un utilisateur
          expect(res.body.length).to.be.greaterThan(0);
  
          // Vérifier que chaque utilisateur a les propriétés attendues
          res.body.forEach(user => {
            expect(user).to.have.property('id');
            expect(user).to.have.property('name');
            expect(user).to.have.property('email');
          });
  
          done();
        });
    });
  });
describe('Test de la route POST /api/users', () => {
    it('devrait créer un utilisateur avec succès', (done) => {
      const newUser = {
        name: 'John Doe',
        email: 'john@example.com'
      };
  
      request(app)
        .post('/api/users')  
        .send(newUser)  // Envoie des données dans le corps de la requête
        .expect(200)  // Attendre un code de statut 200
        .end((err, res) => {
          if (err) return done(err);
  
          // Vérifier que la réponse contient un message de succès
          expect(res.body.message).to.equal('Utilisateur ajouté !');
          done();
        });
    });
  });
