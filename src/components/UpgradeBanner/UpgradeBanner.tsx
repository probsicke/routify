import React from 'react';
import './UpgradeBanner.css';

interface UpgradeBannerProps {
  discount?: number;
  onUpgradeClick?: () => void;
}

const UpgradeBanner: React.FC<UpgradeBannerProps> = ({
  discount = 30,
  onUpgradeClick,
}) => {
  return (
    <div className="upgrade-banner">
      <span className="upgrade-banner__text">
        Curtindo o teste grátis do Routify Premium? Assinando hoje você ganha {discount}% de desconto
      </span>
      <button
        className="upgrade-banner__btn"
        onClick={onUpgradeClick}
      >
        Upgrade
      </button>
    </div>
  );
};

export default UpgradeBanner;
