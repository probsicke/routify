import React from 'react';

export const Footer: React.FC = () => (
  <footer style={{ padding: '2rem 1rem', textAlign: 'center', borderTop: '1px solid #eee' }}>
    <p>© {new Date().getFullYear()} Routify. Todos os direitos reservados.</p>
    <nav style={{ marginTop: '0.5rem' }}>
      <a href="#contato" style={{ margin: '0 0.5rem' }}>Contato</a> |
      <a href="/termos" style={{ margin: '0 0.5rem' }}>Termos</a> |
      <a href="/privacidade" style={{ margin: '0 0.5rem' }}>Privacidade</a>
    </nav>
  </footer>
);
