import { ArrowUpRight } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "California Almonds",
    category: "Dry Fruits & Nuts",
    note: "Creamy, crisp and naturally rich.",
    price: "₹320 – ₹1,180",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Medjool Dates",
    category: "Dates",
    note: "Caramel-soft, handpicked for sweetness.",
    price: "₹260 – ₹920",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Saffron Masala Chai",
    category: "Masala Tea & Blends",
    note: "A fragrant house blend with a golden finish.",
    price: "₹180 – ₹540",
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kaju Kani",
    category: "Kaju / Cashew",
    note: "Our signature, buttery cashew special.",
    price: "₹480 – ₹1,760",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  "All favourites",
  "Dry Fruits & Nuts",
  "Dates",
  "Spices",
  "Masala Tea & Blends",
  "Kaju / Cashew",
];

function ProductSection({ activeCategory, setActiveCategory }) {
  const visibleProducts =
    activeCategory === "All favourites"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="shop section-pad" id="shop">
      <div className="section-heading">
        <div>
          <p className="eyebrow">From our pantry</p>
          <h2 className="split-heading">
            Favourites,{" "}
            <em>
              freshly packed.
              <svg
                className="headline-underline"
                viewBox="0 0 260 12"
                aria-hidden="true"
              >
                <path className="underline-path" d="M2 8 C54 2, 165 2, 258 7" />
              </svg>
            </em>
          </h2>
        </div>
        <a className="text-link" href="#contact">
          Need a recommendation? <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="category-scroll">
        {categories.map((category) => (
          <button
            className={
              activeCategory === category ? "category active" : "category"
            }
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
