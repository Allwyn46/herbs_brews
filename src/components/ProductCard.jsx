import { ArrowUpRight } from "lucide-react";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image" data-image-reveal>
        <img loading="lazy" src={product.image} alt={product.name} />
        <span>{product.category}</span>
      </div>
      <div className="product-meta">
        <div>
          <h3>{product.name}</h3>
          <p>{product.note}</p>
        </div>
        <span className="product-price">{product.price}</span>
      </div>
      <a
        className="product-link"
        href={`https://wa.me/919566577123?text=Hi%20Herbs%20%26%20Brews,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
        target="_blank"
        rel="noreferrer"
      >
        Enquire on WhatsApp <ArrowUpRight size={15} />
      </a>
    </article>
  );
}

export default ProductCard;
