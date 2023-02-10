import { ISbStoriesParams, ISbStoryData, getStoryblokApi } from "@storyblok/react";
import { GetStaticProps, NextPage } from "next";
import {} from "sections";
import { BlogPostPage, BlogPostPageProps } from "views";

const Home: NextPage<BlogPostPageProps> = blogPostPageProps => {
  //
  return <BlogPostPage {...blogPostPageProps} />;
};

// export const getStaticPaths = async () => {
//   const storyblokApi = getStoryblokApi();
//   const { data } = await storyblokApi.get("cdn/links/");

//   const paths: { params: { blogPost: string[] } }[] = [];

//   Object.keys(data.links)
//     .filter((linkKey) => data.links[linkKey].real_path.includes(`/blog/`))
//     .forEach((linkKey) => {
//       const slug = data.links[linkKey].slug;
//       const splittedSlug = slug.split("/");

//       paths.push({ params: { blogPost: [splittedSlug[1]] } });
//     });

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async (ctx: any) => {
//   const { blogPost } = ctx.params;
//   let sbParams: ISbStoriesParams = {
//     version: "draft", // or 'published'
//   };

//   const storyblokApi = getStoryblokApi();

//   try {
//     let { data } = await storyblokApi.get(
//       `cdn/stories/blog/${blogPost[0]}`,
//       sbParams
//     );

//     return {
//       props: { ...mapStoryToBlogPost(data.story) },
//       revalidate: 60,
//     };
//   } catch (e) {
//     return {
//       notFound: true,
//       revalidate: 60,
//     };
//   }
// };

// export default Home;

// const mapStoryToBlogPost = (
//   story: ISbStoryData<BlogPostPageProps>
// ): BlogPostPageProps => {
//   return { ...story.content, relatedPosts: story.content.relatedPosts[0] };
// };
