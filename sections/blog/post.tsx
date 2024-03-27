import type { BlogPost } from "apps/blog/loaders/Blogpost.ts";

interface Props {
  post: BlogPost | null;
}

export default function BlogPostPage(props: Props) {
  const {
    title,
    subtitle,
    image,
    authors,
    content,
    date,
  } = props.post;


  return (
    <div className="mt-[60px] lg:mt-[99px]">
      <div class="max-w-[1660px]! lg:(w-container mx-auto) space-y-12 mx-[20px]">
        <div class="space-y-12 max-w-[800px] mx-auto">
          <div class="space-y-4">
            <div class="space-y-2">
              <h1 class="font-serif text-3xl lg:text-5xl font-bold leading-[120%]">
                {title}
              </h1>
              <div
                class="font-nunito-sans lg:text-lg text-gray-blog leading-[130%]"
              >
                {subtitle}
              </div>
            </div>
            <div class="border-b border-black opacity-[8%]"></div>
            {image && <img src={image} class="object-cover"/> }
          </div>
          <div
            class="blog-content leading-[170%] lg:leading-[200%]"
            dangerouslySetInnerHTML={{ __html: content! }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}
