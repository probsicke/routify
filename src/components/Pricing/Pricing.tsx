import React from 'react';

export const Pricing: React.FC = () => (
  <section id="planos" style={{ padding: '2rem 1rem' }}>
    <h2>Planos</h2>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
        <h3>Grátis</h3>
        <p>Hábitos ilimitados</p>
        <button>Comece grátis</button>
      </div>
      <div style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
        <h3>Pro</h3>
        <p>Estatísticas avançadas</p>
        <button>Assinar Pro</button>
      </div>
    </div>
  </section>
);
