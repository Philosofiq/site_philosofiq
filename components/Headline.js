export default function Headline({ headline, expression, style }) {
  return (
    <h1 className="headline" data-style={style}>
      {headline}
      <span className="text-expression">{expression}</span>
    </h1>
  );
}
