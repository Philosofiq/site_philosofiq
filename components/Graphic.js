export default function Graphic({ type }) {
  function checkType() {
    if (type === "line-elipse-group") {
      return (
        <svg
          className="line-elipse-group"
          width="471"
          height="600"
          viewBox="0 0 471 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="177.5" x2="458" y2="177.5" stroke="#5F5F5F" />
          <circle cx="458" cy="165" r="12.5" stroke="#5F5F5F" />
          <line
            x1="183.448"
            y1="177.343"
            x2="387.182"
            y2="587.534"
            stroke="#5F5F5F"
          />
          <circle
            cx="398.377"
            cy="581.974"
            r="12.5"
            transform="rotate(63.5873 398.377 581.974)"
            stroke="#5F5F5F"
          />
          <line
            x1="232.887"
            y1="177.663"
            x2="186.63"
            y2="5.02947"
            stroke="#5F5F5F"
            strokeOpacity="0.45"
          />
          <circle
            cx="182.213"
            cy="6.21304"
            r="5.07294"
            transform="rotate(-105 182.213 6.21304)"
            fill="#5F5F5F"
            fillOpacity="0.55"
          />
          <circle
            cx="182.213"
            cy="6.21304"
            r="4.57294"
            transform="rotate(-105 182.213 6.21304)"
            stroke="#5F5F5F"
            strokeOpacity="0.45"
          />
        </svg>
      );
    } else if (type === "line-elipse-vertical") {
      return (
        <svg
          className="line-elipse-vertical"
          width="26"
          height="483"
          viewBox="0 0 26 483"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499979"
            y2="471"
            stroke="#5F5F5F"
          />
          <circle cx="13.0002" cy="470" r="12.5" stroke="#5F5F5F" />
        </svg>
      );
    } else {
      return "";
    }
  }
  return (
    <div className="graphic" data-graphic={type}>
      {checkType()}
    </div>
  );
}
