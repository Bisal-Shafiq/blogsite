import Link from 'next/link';
import { client } from '@/sanity/lib/client';

interface BlogPost {
  title: string;
  summary: string;
  image: string;
  slug: string;
}

export async function getStaticProps() {
  const query = `*[_type == "blogPost"] {
    title,
    summary,
    "image": image.asset->url,
    "slug": slug.current
  }`;

  const blogs = await client.fetch(query);

  return {
    props: { blogs },
    revalidate: 10, // Revalidate every 10 seconds
  };
}

const BlogCard = ({ blogs }: { blogs: BlogPost[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div key={blog.slug} className="card border shadow-md rounded-lg">
          {/* Image Styling */}
          <div className="relative w-full h-60">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-t-lg w-full h-full object-cover"
            />
          </div>

          {/* Content Styling */}
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-bold">{blog.title}</h3>
            {/* Truncated summary */}
            <p className="text-gray-600 mt-2 text-justify line-clamp-3">
              {blog.summary}
            </p>
            <Link href={`./blog/${blog.slug}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
