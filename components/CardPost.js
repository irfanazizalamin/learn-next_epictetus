import Link from "next/link";
import InfoPost from "./InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <img
          src={thumbnail}
          alt="thumbnail-card"
          className="w-full rounded mb-4"
        />
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}
