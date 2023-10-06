import Card from "./card";

export default function Dashboard(props) {
  const { reserveringen } = props;
  return (
    <div className="gap-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-3">
      {reserveringen?.map((reserv) => (
        <Card key={reserv.naam} reserv={reserv} />
      ))}
    </div>
  );
}
