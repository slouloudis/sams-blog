import { allPosts } from 'contentlayer/generated'

export function getPosts() {
    return allPosts
}

export function getPostBySlug(slug:string) {
    return getPosts().find((post) => post.slug == slug)
}