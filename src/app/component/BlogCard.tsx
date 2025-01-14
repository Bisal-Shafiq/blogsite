import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  summary: string;
  image: string;
  slug: string;
}

const BlogCard = ({ blogs }: { blogs: BlogPost[] }) => {
  if (!blogs || blogs.length === 0) {
    return <p className="text-center">No blogs available at the moment.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div key={blog.slug} className="card border shadow-md rounded-lg">
          <div className="relative w-full h-60">
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              className="rounded-t-lg object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-bold">{blog.title}</h3>
            <p className="text-gray-600 mt-2 text-justify line-clamp-3">
              {blog.summary}
            </p>
            <Link
              href={`/blog/${blog.slug}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
