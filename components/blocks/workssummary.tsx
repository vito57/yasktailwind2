import Link from "next/link";

//Summary
interface WorksSummaryProps {
  designer: string;
  client?: string;
  link?: any;
  year: string;
}
export default function WorksSummary({
  designer,
  client,
  link,
  year,
}: WorksSummaryProps) {
  return (
    <ul className="list-none font-mono">
      <li>
        Designer:{" "}
        <Link className="ylink capitalize" href={`/${designer}`}>
          {designer}
        </Link>
      </li>
      {client && <li>Client: {client}</li>}

      {link && (
        <li>
          Live:{" "}
          <Link className="ylink" href={link}>
            {link}
          </Link>
        </li>
      )}
      <li>Year: {year} </li>
    </ul>
  );
}
//End Summary
