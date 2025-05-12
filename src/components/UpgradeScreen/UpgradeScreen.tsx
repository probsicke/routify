import './UpgradeScreen.css';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'annual',
    title: 'Plano Anual',
    price: 'R$ 4,83/mês',
    oldPrice: 'R$ 6,90',
    description: '(cobrado anualmente)',
    isPopular: true,
  },
  {
    id: 'monthly',
    title: 'Plano Mensal',
    price: 'R$ 7,63/mês',
    oldPrice: 'R$ 10,90',
    description: '(cobrado mensalmente)',
  },
];

export default function UpgradeScreen() {
  return (
    <div className="upgrade-screen">
      <div className="upgrade-screen__content">
        <p className="promo-text">
          Assinando hoje você ganha <strong>30% de desconto!</strong>
        </p>

        <div className="plans-container">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card${plan.isPopular ? ' popular' : ''}`}
            >
              <h2 className="plan-card__title">{plan.title}</h2>
              <p className="plan-card__price">{plan.price}</p>
              <p className="plan-card__old-price">{plan.oldPrice}</p>
              <p className="plan-card__desc">{plan.description}</p>
              <button className="plan-card__btn">Assinar</button>
            </div>
          ))}
        </div>

        <Link to="/" className="free-link">
          Continuar no plano Free
        </Link>
      </div>
    </div>
  );
}
