function Brand({ href = "#top" }) {
  return (
    <a className="brand" href={href} aria-label="Herbs and Brews home">
      <span className="brand-mark">
        H<span>&</span>B
      </span>
      <span>
        Herbs <i>&</i> Brews
      </span>
    </a>
  );
}

export default Brand;
