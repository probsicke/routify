import React from "react";
import { useNavigate } from "react-router-dom";
import "./UpgradeBanner.css";

export interface UpgradeBannerProps {
  discount?: number;
  onUpgradeClick?: () => void;      // ← aqui
}

const UpgradeBanner: React.FC<UpgradeBannerProps> = ({
  discount = 30,
  onUpgradeClick
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onUpgradeClick) {
      onUpgradeClick();              
    } else {
      navigate("/upgrade");          
    }
  };

  return (
    <div className="upgrade-banner">
      <span className="upgrade-banner__text">
        Curtindo o teste grátis do Routify Premium? Assinando hoje você ganha {discount}% de desconto
      </span>
      <button
        className="upgrade-banner__btn"
        onClick={handleClick}
      >
        Upgrade
      </button>
    </div>
  );
};

export default UpgradeBanner;

