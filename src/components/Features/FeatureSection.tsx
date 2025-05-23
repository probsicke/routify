import React from 'react';
import './FeatureSection.css';
import { ReactComponent as SpreadsheetIcon } from '../assets/icons/spreadsheet.svg';
import { ReactComponent as LayersIcon      } from '../assets/icons/layers.svg';
import { ReactComponent as WhatsAppIcon    } from '../assets/icons/whatsapp.svg';
import { ReactComponent as AiIcon          } from '../assets/icons/ai.svg';

export const FeatureSection: React.FC = () => (
  <section className="feature-section">
    <div className="feature-container">
      <div className="feature-text">
        <h2>Mais organização e produtividade no seu dia a dia</h2>
        <p>
          Gerencie suas tarefas diárias pelo celular, computador, ou até mesmo pelo WhatsApp.<br/>
          Conte com a inteligência artificial do Planko para aumentar sua produtividade.
        </p>
      </div>

      <div className="feature-right">
        <div className="feature-list">
          <div className="feature-item">
            <SpreadsheetIcon className="feature-icon"/>
            <div>
              <strong>Multip​los formatos de <u>visualização</u>:</strong><br/>
              semanal, diária e geral
            </div>
          </div>
          <div className="feature-item">
            <LayersIcon className="feature-icon"/>
            <div>
              <strong>Diversas funcionalidades para <u>organização e produtividade</u></strong>
            </div>
          </div>
          <div className="feature-item">
            <WhatsAppIcon className="feature-icon"/>
            <div>
              <strong>Gestão de tarefas pelo WhatsApp</strong>
            </div>
          </div>
          <div className="feature-item">
            <AiIcon className="feature-icon"/>
            <div>
              <strong>Ajuda nas suas tarefas com Inteligência Artificial</strong>
            </div>
          </div>
        </div>

        <button className="btn-start">Comece grátis →</button>
      </div>
    </div>
  </section>
);
