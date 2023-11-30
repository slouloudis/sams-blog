// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkMdxImages from 'remark-mdx-images'


export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    slug: { type: "string", resolve: (post) => post._raw.flattenedPath }
  },
}))

export default makeSource({ 
  contentDirPath: 'posts', 
  documentTypes: [Post],
  // @ts-ignore
  mdx: {
    // @ts-ignore
    remarkPlugins: remarkMdxImages,
    //@ts-ignore
    esbuildOptions: (options) => {
      // @ts-ignore
      options.loader = {
        // @ts-ignore
        ...options.loader,
        // @ts-ignore
        'jpg': 'dataurl'
      }
      // @ts-ignore
      return options
    }
  } 

})