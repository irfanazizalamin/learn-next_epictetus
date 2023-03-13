import InfoPost from "./InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex items-center flex-wrap -mx-4">
        <div className="lg:w-8/12 md:w-7/12 w-full px-4">
          <img
            src="/featured-thumbnail.png"
            alt="featured-thumbnail"
            className="w-full rounded-xl"
          />
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4 mt-4 md:mt-0">
          <InfoPost
            className="w-1/2"
            category="UI Design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding
                  complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
                  cillum dolor. Voluptate exercitation incididunt aliquip deserunt
                  reprehenderit elit laborum."
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="lg:hidden border-white/10 mt-10"/>
    </article>
  );
}
