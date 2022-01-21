import Link from "next/link";
import { apiClient } from "../libs/apiClient";

export default function Home({ data }) {
  return (
    <>
      <h1>{data.title}</h1>
      <h3>{data.subtitle}</h3>
      <p>{data.description}</p>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await apiClient.get("/api/landing");
    const {
      data: { attributes },
    } = await res.data;

    return {
      props: {
        data: attributes,
        revalidate: 60,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
