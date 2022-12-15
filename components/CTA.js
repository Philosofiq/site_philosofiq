export default function CTA({ variant, ctaText }) {
  function defineVariant() {
    if (variant === "primary") {
      return (
        <div className="cta-group">
          <h5>Got a project?</h5>
          <a
            href="mailto:inquiries@philosofiq.com"
            className="c-cta btn"
            data-variant={variant}
          >
            {ctaText}
          </a>
        </div>
      );
    } else {
      return (
        <a
          className="c-cta"
          href="mailto:inquiries@philosofiq.com"
          data-variant={variant}
        >
          {ctaText}
        </a>
      );
    }
  }
  return <>{defineVariant()}</>;
}
