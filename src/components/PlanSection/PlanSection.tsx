import React from 'react'
import './PlanSection.css'

export const PlanSection: React.FC = () => (
  <section className="plans-section">
    <h2>Nossos Planos</h2>
    <div className="plans-container">

      <div className="plan-card plan-card--white">
        <div className="plan-tag">Free</div>
        <p className="plan-price">Gratuito</p>
        <ul className="plan-features">
          <li>Lista de tarefas</li>
          <li>Prazos</li>
          <li>Projetos</li>
          <li>Lembretes</li>
        </ul>
        <button className="plan-btn plan-btn--outline">Comece agora</button>
      </div>

      <div className="plan-card plan-card--green">
        <div className="plan-tag">Premium</div>
        <p className="plan-price">R$ 6,90/mês</p>
        <ul className="plan-features">
          <li>Tudo do Free, mais:</li>
          <li>Planner diário e semanal</li>
          <li>Gestão pelo WhatsApp</li>
          <li>Tarefas recorrentes</li>
        </ul>
        <button className="plan-btn plan-btn--solid">Teste grátis</button>
      </div>

      <div className="plan-card plan-card--blue">
        <div className="plan-tag">Blue</div>
        <p className="plan-price">R$ 9,90/mês</p>
        <ul className="plan-features">
          <li>Tudo do Premium, mais:</li>
          <li>Relatórios avançados</li>
          <li>Integração com calendário</li>
          <li>API pública</li>
        </ul>
        <button className="plan-btn plan-btn--solid">Teste grátis</button>
      </div>

    </div>
  </section>
)
