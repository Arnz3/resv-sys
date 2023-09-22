import Card from "./card";

export default function Dashboard(props) {
  const { reserveringen } = props;
  return (
    <div>
      {reserveringen?.map((reserv) => (
        <Card key={reserv.naam} reserv={reserv} />
      ))}
    </div>
  );
}
