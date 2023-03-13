export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="flex items-center mt-5">
      <img
        src={authorAvatar}
        alt="featured-author"
        className="w-[50px] h-auto"
      />
      <div className="ml-4">
        <h4 className="text-[16px] text-white">{authorName}</h4>
        <p className="text-[16px] text-white/60">{authorJob}</p>
      </div>
    </div>
  );
}
