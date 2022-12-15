import Card from "./Card";
export default function Gallery(props) {
  return (
    <div className="o-constrain -narrow">
      <div className="c-gallery" data-grid={props.gridType}>
        <Card />
      </div>
    </div>
  );
}
