import { WEB_SITE } from "config";
import { CommentForm } from "./CommentForm";

// this comp is now responsible for fetching components

export default async function Comments({postSlug}: {postSlug: string}) {
    console.log('This runs on the server')
    // `/blog/post-1`
    

    let comments = [];

    try {
        const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {next: {revalidate: 0}})
        const response = await commentsResult.json()
        comments = response.comments.rows
        console.log(response.comments)
    } catch (err) {
        console.log(err)
    }


    console.log(comments)
    return (
        <div>
            <CommentForm postSlug={postSlug}/>
            <h2>| Comments |</h2>
            <ul>
            {/* @ts-ignore */}
            {comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        {comment.username} says...
                        <br />
                        {comment.content}
                    </li>
                )
            })}
            </ul>
        </div>
    )
}