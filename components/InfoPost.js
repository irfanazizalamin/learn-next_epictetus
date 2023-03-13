import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";

export default function ({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostMetaTitle category={category} date={date} title={title} />
      <p className="text-[16px] leading-7 text-white/60 mt-[10px]">
        {shortDescription}
      </p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
}
