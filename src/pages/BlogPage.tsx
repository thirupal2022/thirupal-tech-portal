import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    slug: "aws-cloud-practitioner-guide",
    title: "AWS Cloud Practitioner Complete Guide",
    category: "AWS Cloud",
    excerpt:
      "A complete beginner guide to AWS Cloud Practitioner certification."
  },
  {
    id: 2,
    slug: "react-performance",
    title: "React Performance Optimization",
    category: "React",
    excerpt:
      "Improve application performance using modern React techniques."
  },
  {
    id: 3,
    slug: "technology-in-agriculture",
    title: "Technology in Agriculture",
    category: "Agriculture",
    excerpt:
      "How technology can transform farming and rural communities."
  }
];

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blogs | ThirupalTech</title>
      </Helmet>

      <div className="min-h-screen">
        <section className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">
              Blog & Articles
            </h1>

            <p className="text-gray-600">
              Technology, AWS, Development and Community
              Impact.
            </p>

            <input
              className="mt-8 w-full md:w-96 border rounded-xl p-4"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="border rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="h-48 bg-gray-200" />

                  <div className="p-6">
                    <span className="text-sm text-amber-600">
                      {blog.category}
                    </span>

                    <h3 className="text-xl font-bold mt-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mt-4">
                      {blog.excerpt}
                    </p>

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-block mt-6 text-blue-600 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}