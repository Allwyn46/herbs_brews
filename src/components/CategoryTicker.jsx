function CategoryTicker() {
  const items = [
    "DRY FRUITS",
    "NUTS",
    "MASALA TEA",
    "SPICES",
    "DATES",
    "KAJU KANI",
  ];

  return (
    <section className="marquee">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            {index < items.length * 2 - 1 && <i>✳</i>}
          </span>
        ))}
      </div>
    </section>
  );
}

export default CategoryTicker;
