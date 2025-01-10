import { client } from "@/sanity/lib/client";
import BlogCard from "./component/BlogCard";


const query = `*[_type == "blogPost"] {
  title,
  summary,
  "image": image.asset->url,
  "slug": slug.current
}`;

export default async function Home() {
  // Fetch the latest data from Sanity
  const blogs = await client.fetch(query);

  return (
    <div className="items-center justify-center">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col lg:flex-row items-center bg-black/50 py-6 sm:py-12 md:py-16">
        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-10 lg:px-20 max-w-screen-xl mx-auto">
          {/* Text Section */}
          <div className="text-center lg:text-left text-white max-w-[700px] mb-6 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Welcome to Cat Blog
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
              Discover everything about cats, their care, and more.
            </p>
            <a
              href="#cards-section"
              className="bg-pink-800 hover:bg-blue-950 text-white font-bold py-3 px-6 rounded transition-all"
            >
              Explore More
            </a>
          </div>

          {/* Circular Image */}
          <div className="w-80 h-80 sm:w-50 sm:h-50 md:w-65 md:h-65 lg:w-90 lg:h-90 rounded-full overflow-hidden mb-6 lg:mb-0">
            <img
              src="/bg.jpg" // Replace with your image path
              alt="Cat Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section id="cards-section" className="container mx-auto p-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Latest Blogs
        </h1>
        <BlogCard blogs={blogs} />
      </section>
      

    </div>

    

  );
}
