import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageHero from "@/components/common/PageHero";

interface Article {
  title: string;
  category: string;
  content: string;
  coverImage: string;
}

export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${slug}`)
      .then((res) => res.json())
      .then(setArticle)
      .catch(() => setArticle(null));
  }, [slug]);

  if (!article)
    return <PageHero eyebrow=" — ARTICLE" title="Loading article…" />;

  return (
    <>
      <PageHero
        eyebrow={`  ${article.category.toUpperCase()}`}
        title={article.title}
      />
      <article className="section-pad bg-white max-w-3xl mx-auto prose prose-lg">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-80 object-cover mb-10"
        />
        <div className="text-ink-soft leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </article>
    </>
  );
}
