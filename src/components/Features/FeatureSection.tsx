import React from 'react'
import './FeatureSection.css'
import { Grid2x2, Layers, MessageCircle, Brain } from 'lucide-react'

export const FeatureSection: React.FC = () => (
  <section className="feature-section">
    <div className="feature-container">

      <div className="feature-text">
        <h2>Mais organização e produtividade no seu dia a dia</h2>
        <br></br>
        <p>
          Gerencie suas tarefas diárias pelo celular, computador, ou até mesmo pelo WhatsApp.</p>
          <p>Conte com a inteligência artificial do Planko para aumentar sua produtividade.</p>
      </div>

      <div className="feature-right">
        <div className="feature-list">

          <div className="feature-item">
            <div className="feature-icon-box">
              <Grid2x2 className="feature-svg" size={24} strokeWidth={1.5} />
            </div>
            <p>
              Múltiplos formatos de <strong>visualização</strong>:<br />
              semanal, diária e geral
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Layers className="feature-svg" size={24} strokeWidth={1.5} />
            </div>
            <p>
              Diversas funcionalidades para <strong>organização e produtividade</strong>
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <MessageCircle className="feature-svg" size={24} strokeWidth={1.5} />
            </div>
            <p>
              Gestão de tarefas pelo <strong>WhatsApp</strong>
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Brain className="feature-svg" size={24} strokeWidth={1.5} />
            </div>
            <p>
              Ajuda nas suas tarefas com <strong>Inteligência Artificial</strong>
            </p>
          </div>
        </div>
        <button className="btn-start">
          Comece grátis 
        </button>
      </div>
    </div>
  </section>
)
