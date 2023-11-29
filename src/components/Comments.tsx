import { WEB_SITE } from "config";

export default async function Comments({postSlug}: {postSlug: string}) {
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
            <h2>| Comments |</h2>
            <h3>Leave a comment: </h3>

            <form action={`/api/comments/${postSlug}`} method='POST'>
                <label htmlFor="username">Name:</label>
                <input type='text' name='username' className='text-neutral-900'/>

                <label htmlFor="comment">Your comment:</label>
                <textarea name='comment' cols={30} rows={10} className='text-neutral-900'/>

                <button type='submit'>send comment</button>
            </form>
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