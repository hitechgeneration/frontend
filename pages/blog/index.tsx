import { GetStaticProps } from "next";
import Link from "next/link";
import { IBlog, getBlogs } from "../../utils/contentful";
import { FiArrowUpRight } from "react-icons/fi";
import { Kontakt } from "../../components/Kontakt";

export const getDate = (date: string) => {
  return new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="p-4 border-2 border-gray-50 shadow-lg shadow-slate-200/80 rounded-lg my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {blog.fields.thumbnail && (
        <div className="h-48 w-auto rounded-lg">
          <img
            src={blog.fields.thumbnail.fields.file.url}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-sm text-gray-700">
            {getDate(blog.fields.date)}
          </div>
          <div className="text-lg md:text-2xl font-medium my-2">
            {blog.fields.title}
          </div>
          {blog.fields.description && <div>{blog.fields.description}</div>}
        </div>
        <Link href={`/blog/${blog.fields.slug}`}>
          <button className="flex flex-row gap-1 items-center hover:text-blue-500 transition ease-in-out duration-200 w-fit font-medium p-2 rounded-lg bg-slate-100 text-slate-500 border-neutral-200 border-2 mt-5">
            Lexo më shumë
            <FiArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function Blogs({ blogs }: { blogs: Array<IBlog> }) {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-center my-5 text-neutral-800">
        Blog
      </h1>
      {(!blogs || blogs.length === 0) && (
        <div className="text-center text-xl mt-20 text-neutral-800">
          Për momentin nuk ka asnjë event ose artikull.
        </div>
      )}
      {blogs && blogs.length > 0 && (
        <>
          <div>
            {blogs.map((blog: any) => (
              <BlogCard key={blog.sys.id} blog={blog} />
            ))}
          </div>
          <Kontakt />
        </>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getBlogs();

  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
};
