import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == 'blogPost' && slug.current=='${slug}'][0]{
    title,
    summary,
    content,
    "image": image.asset->url,
    "authorName": author->name,
    "authorBio": author->bio,
    "authorImage": author->image.asset->url
  }`;

  // Fetch the blog post data
  const post = await client.fetch(query);

  // Handle if the blog post is not found
  if (!post) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
        <p className="text-gray-600">We couldn't find the blog you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto lg:px-16 p-32">
      {/* Blog Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
        {post.title}
      </h1>

      {/* Author Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8 space-y-4 md:space-y-0 md:space-x-6">
        {post.authorImage && (
          <img
            src={post.authorImage}
            alt={post.authorName}
            className="w-16 h-16 rounded-full shadow-md"
          />
        )}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-700">{post.authorName}</h2>
          <p className="text-gray-500 text-sm">{post.authorBio}</p>
        </div>
      </div>

      {/* Blog Image */}
      {post.image && (
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Blog Content */}
<div className="prose prose-lg md:prose-xl mx-auto text-white text-justify">
  {post.content ? (
    <PortableText value={post.content} />
  ) : (
    <p>No content available for this blog.</p>
  )}
</div>
    </div>
  );
}
