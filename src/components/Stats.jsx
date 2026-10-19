import StatCard from "./StatCard";

function Stats(props) {
  return (
    <div className="flex justify-center gap-6 pb-8">
      <StatCard value={props.stars} label="Stars" />
      <StatCard value={props.downloads} label="Downloads" />
      <StatCard value={props.issues} label="Issues reported" />
    </div>
  );
}

export default Stats;
