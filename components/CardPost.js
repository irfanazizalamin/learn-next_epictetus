import InfoPost from "./InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <img src={thumbnail} alt="thumbnail-card" className="w-full rounded mb-4" />
      <InfoPost {...infoPost} />
    </article>
  );
}
