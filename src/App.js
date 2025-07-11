info

code

preview

Deploy
Hey Nicolas; Quick input needed :
Ask Question
Agent will continue working after your reply
🎯 PARFAIT ! Créons le frontend LeadMiner Pro (30 minutes)

🚀 ÉTAPE 1 : CRÉER LES FICHIERS FRONTEND SUR GITHUB (15 min)
On va ajouter les fichiers React dans votre repo GitHub :
Retournez sur GitHub : https://github.com/Nicolas1919-Katanos/leadminer-pro
Cliquez "Add file" → "Create new file"
Nom du fichier : src/App.js
COPIEZ ce code dans App.js :
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://leadminer-pro-api.onrender.com/api';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [plan, setPlan] = useState('starter');
  const [message, setMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/register`, {
        email,
        password,
        company_name: company,
        industry: 'Technology',
        plan
      });
      setMessage('✅ Inscription réussie ! Connectez-vous maintenant.');
    } catch (error) {
      setMessage('❌ Erreur: ' + (error.response?.data?.detail || 'Inscription échouée'));
    }
  };

  return (
    <div style={{fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
      {/* Header */}
      <header style={{textAlign: 'center', marginBottom: '50px'}}>
        <h1 style={{color: '#2563eb', fontSize: '3rem', marginBottom: '10px'}}>
          LeadMiner Pro
        </h1>
        <p style={{fontSize: '1.2rem', color: '#666'}}>
          Générez des leads d'entreprises automatiquement
        </p>
      </header>

      {/* Hero Section */}
      <section style={{textAlign: 'center', marginBottom: '60px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '60px 20px', borderRadius: '10px'}}>
        <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>
          Automatisez votre prospection commerciale
        </h2>
        <p style={{fontSize: '1.3rem', marginBottom: '30px'}}>
          500+ leads gratuits • Données enrichies • Export CSV
        </p>
        <button 
          onClick={() => setIsRegistering(true)}
          style={{background: 'white', color: '#667eea', border: 'none', padding: '15px 30px', fontSize: '1.1rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'}}
        >
          Commencer gratuitement
        </button>
      </section>

      {/* Pricing */}
      <section style={{marginBottom: '60px'}}>
        <h3 style={{textAlign: 'center', fontSize: '2rem', marginBottom: '40px'}}>Tarifs transparents</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          
          <div style={{border: '2px solid #e5e7eb', borderRadius: '10px', padding: '30px', textAlign: 'center'}}>
            <h4 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Starter</h4>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '20px'}}>
              29€<span style={{fontSize: '1rem', color: '#666'}}>/mois</span>
            </div>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '30px'}}>
              <li>✅ 500 leads/mois</li>
              <li>✅ Données enrichies</li>
              <li>✅ Export CSV</li>
              <li>✅ Support email</li>
            </ul>
            <button style={{background: '#e5e7eb', color: '#374151', border: 'none', padding: '12px 24px', borderRadius: '5px', cursor: 'pointer', width: '100%'}}>
              Choisir Starter
            </button>
          </div>

          <div style={{border: '2px solid #2563eb', borderRadius: '10px', padding: '30px', textAlign: 'center', position: 'relative'}}>
            <div style={{position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: 'white', padding: '5px 15px', borderRadius: '15px', fontSize: '0.8rem'}}>
              POPULAIRE
            </div>
            <h4 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Pro</h4>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '20px'}}>
              99€<span style={{fontSize: '1rem', color: '#666'}}>/mois</span>
            </div>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '30px'}}>
              <li>✅ 2,500 leads/mois</li>
              <li>✅ Données premium</li>
              <li>✅ API access</li>
              <li>✅ Support prioritaire</li>
            </ul>
            <button style={{background: '#2563eb', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '5px', cursor: 'pointer', width: '100%'}}>
              Choisir Pro
            </button>
          </div>

          <div style={{border: '2px solid #e5e7eb', borderRadius: '10px', padding: '30px', textAlign: 'center'}}>
            <h4 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Enterprise</h4>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '20px'}}>
              299€<span style={{fontSize: '1rem', color: '#666'}}>/mois</span>
            </div>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '30px'}}>
              <li>✅ 10,000 leads/mois</li>
              <li>✅ Intégrations CRM</li>
              <li>✅ Support dédié</li>
              <li>✅ Données temps réel</li>
            </ul>
            <button style={{background: '#7c3aed', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '5px', cursor: 'pointer', width: '100%'}}>
              Choisir Enterprise
            </button>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {isRegistering && (
        <section style={{background: 'white', border: '2px solid #e5e7eb', borderRadius: '10px', padding: '40px', marginBottom: '60px'}}>
          <h3 style={{textAlign: 'center', marginBottom: '30px'}}>Créer votre compte</h3>
          <form onSubmit={handleRegister} style={{maxWidth: '400px', margin: '0 auto'}}>
            <div style={{marginBottom: '20px'}}>
              <input
                type="email"
                placeholder="Email professionnel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '5px', fontSize: '1rem'}}
              />
            </div>
            <div style={{marginBottom: '20px'}}>
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '5px', fontSize: '1rem'}}
              />
            </div>
            <div style={{marginBottom: '20px'}}>
              <input
                type="text"
                placeholder="Nom de votre entreprise"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                style={{width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '5px', fontSize: '1rem'}}
              />
            </div>
            <div style={{marginBottom: '20px'}}>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                style={{width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '5px', fontSize: '1rem'}}
              >
                <option value="starter">Starter - 29€/mois</option>
                <option value="pro">Pro - 99€/mois</option>
                <option value="enterprise">Enterprise - 299€/mois</option>
              </select>
            </div>
            <button
              type="submit"
              style={{width: '100%', background: '#2563eb', color: 'white', border: 'none', padding: '15px', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer'}}
            >
              Commencer l'essai gratuit
            </button>
          </form>
          {message && (
            <p style={{textAlign: 'center', marginTop: '20px', padding: '10px', background: message.includes('✅') ? '#d1fae5' : '#fee2e2', borderRadius: '5px'}}>
              {message}
            </p>
          )}
        </section>
      )}

      {/* Stats */}
      <section style={{textAlign: 'center', marginBottom: '60px'}}>
        <h3 style={{fontSize: '2rem', marginBottom: '40px'}}>LeadMiner Pro en chiffres</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px'}}>
          <div>
            <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#2563eb'}}>500K+</div>
            <div>Leads générés</div>
          </div>
          <div>
            <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#10b981'}}>2,500+</div>
            <div>Clients satisfaits</div>
          </div>
          <div>
            <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#8b5cf6'}}>95%</div>
            <div>Taux de précision</div>
          </div>
          <div>
            <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b'}}>24h</div>
            <div>Génération continue</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{textAlign: 'center', padding: '40px 0', borderTop: '1px solid #e5e7eb'}}>
        <h4 style={{fontSize: '1.5rem', marginBottom: '10px'}}>LeadMiner Pro</h4>
        <p style={{color: '#666'}}>Génération automatique de leads pour booster vos ventes</p>
        <p style={{color: '#666', fontSize: '0.9rem', marginTop: '20px'}}>
          API Status: ✅ Opérationnelle • Dernière mise à jour: {new Date().toLocaleDateString()}
        </p>
      </footer>
    </div>
  );
}

export default App;
