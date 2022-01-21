function Post({ post }) {
  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  const paths = await posts?.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const pageProps = await res.json();

  return { props: { post: pageProps } };
}

export default Post;
