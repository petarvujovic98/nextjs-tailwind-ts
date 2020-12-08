import { PageLink } from "@components/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center">
      <div className="text-4xl max-w-4xl text-transparent bg-clip-text bg-gradient-to-tl from-indigo-700 via-gray-300 to-green-300">
        This is a starter repo using TailwindCSS and Apollo GraphQL in
        Typescript
      </div>
      <ul className="flex flex-col justify-center items-center">
        <li>
          <PageLink href="/about" content="About" />
        </li>
        <li>
          <PageLink href="/ssr" content="SSR" />
        </li>
        <li>
          <PageLink href="/ssg" content="SSG" />
        </li>
      </ul>
    </div>
  );
}
