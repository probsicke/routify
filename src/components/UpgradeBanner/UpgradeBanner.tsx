import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UpgradeBanner.css';

interface UpgradeBannerProps {
  discount?: number;
}

const UpgradeBanner: React.FC<UpgradeBannerProps> = ({ discount = 30 }) => {
  const navigate = useNavigate();

  return (
    <div className="upgrade-banner">
      <span className="upgrade-banner__text">
        Curtindo o teste grátis do Routify Premium? Assinando hoje você ganha {discount}% de desconto
      </span>
      <button
        className="upgrade-banner__btn"
        onClick={() => navigate('/upgrade')}
      >
        Upgrade
      </button>
    </div>
  );
};

export default UpgradeBanner;
