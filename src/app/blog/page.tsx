import { getPosts } from "@/lib/posts";
import Link from 'next/link'
import TestComp from "@/components/TestComp";

export default function Page() {
    const posts = getPosts()

    return (
        <div>
            <h2>My posts: </h2>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}