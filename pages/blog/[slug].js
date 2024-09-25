import Image from "next/image";
import Link from "next/link";

import { getAllPosts, getAuthorBySlug, getPostBySlug } from "../../lib/api";

export default function Post({ post }) {
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <i>{post.note}</i>
      {post.author.slug != "none" && (
        <p>
          -By{" "}
          <Link href={post.author.permalink}>
            <a>{post.author.name}</a>
          </Link>
        </p>
      )}

      <div className="entry" dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const author = getAuthorBySlug(post.author);

  return {
    props: {
      post: {
        ...post,
        author,
      },
    },
  };
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
}
