import { useRouter } from "next/router";

export default function Blog() {
  const { locale } = useRouter();

  return <h1>Blog — {locale}</h1>;
}
