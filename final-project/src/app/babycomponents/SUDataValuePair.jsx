import BackButton from "./BackButton";
import babyCompStyles from "./sudatavaluepair.css";

export default function SUDataValuePair({data, value}) {
  return (
    <div className="flexbox-item-keyvaluepair">
        <div className="data">{data}
          <span>:  </span>
        </div>
        <div className="value">{value}</div>
    </div>
  );
}
