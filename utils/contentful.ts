import { createClient } from "contentful";

export const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.DELIVERY_API || "",
});

export const getBlogs = async () => {
  const blogs = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
  });
  return blogs.items;
};

export const getBlogBySlug = async (slug: string) => {
  const blog = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });
  return blog.items[0];
};
export interface IBlog {
  fields: {
    title: string;
    slug: string;
    description?: string;
    date: string;
    thumbnail?: {
      fields: {
        description: "pirro";
        file: {
          contentType: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          url: string;
        };
        title: string;
      };
    };
    content: string;
  };
}
