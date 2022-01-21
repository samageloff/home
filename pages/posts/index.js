import Link from "next/link";

const List = ({ data }) =>
  data.map((item) => (
    <li key={item?.id}>
      <Link href={`/post/${item?.id}`}>
        <a>{item?.title}</a>
      </Link>
    </li>
  ));

function Posts({ data }) {
  return (
    <ul>
      <List data={data || []} />
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Posts;
