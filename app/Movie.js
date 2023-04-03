import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, poster_path, release_date }) {
  const imgPath = "https://image.tmdb.org/t/p/original/" + poster_path;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/` + id}>
        <Image src={imgPath} alt={title} width={800} height={800} />
      </Link>
    </div>
  );
}
