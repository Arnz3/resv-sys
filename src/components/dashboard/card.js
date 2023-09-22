
export default function Card({ reserv }) {
  const { naam, datum, uur, aantal, telefoon, email } = reserv;

  return (
    <div className="card">
      <h2>{naam}</h2>
      <div>
        <ul>
          <li>{datum}</li>
          <li>{uur}</li>
          <li>{aantal}</li>
          <li>{telefoon}</li>
          <li>{email}</li>
        </ul>
      </div>
    </div>
  );
}
