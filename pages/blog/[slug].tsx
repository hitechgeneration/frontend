import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { IBlog, getBlogBySlug, getBlogs } from "../../utils/contentful";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getDate } from ".";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";
import { Kontakt } from "../../components/Kontakt";

export default function Blog({ blog }: { blog: IBlog }) {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex flex-row gap-1 items-center px-3 py-2 mt-2 hover:text-rose-500"
      >
        <FiArrowLeft />
      </button>
      <div className="text-2xl md:text-4xl font-bold text-neutral-900 mt-8 text-center">
        {blog.fields.title}
      </div>
      {blog.fields.thumbnail && (
        <div className="h-80 w-auto my-6">
          <img
            src={blog.fields.thumbnail.fields.file.url}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      )}
      <div className="text-sm text-neutral-700 mb-10">
        {getDate(blog.fields.date)}
      </div>
      <div className="mb-10 prose">
        <ReactMarkdown
          children={blog.fields.content}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <Kontakt />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getBlogs();

  const paths = blogs.map((blog: any) => {
    return {
      params: {
        slug: blog.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const blog = await getBlogBySlug(slug);

  return {
    props: {
      blog,
    },
    revalidate: 10,
  };
};
