import Link from "next/link";
import { memo } from "react";

interface Props {
  content: string;
  href: string;
}

function link({ content, href }: Props) {
  return (
    <Link href={href}>
      <a>
        <div className="transition duration-250 ease-in-out transform w-min bg-clip-text bg-gradient-to-tr from-indigo-700 via-gray-300 to-green-300 hover:scale-125 hover:text-transparent">
          {content}
        </div>
      </a>
    </Link>
  );
}

export const PageLink = memo(link);
