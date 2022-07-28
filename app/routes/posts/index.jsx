import { Link, useLoaderData } from '@remix-run/react';

export const loader = async () => {
	const data = {
		posts: await fetch(process.env.REMIX_PUBLIC_WEBINY_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.WEBINY_API_TOKEN}`,
			},
			body: JSON.stringify({
				query: `
    query PostSlugs {
        listPosts {
            data {
                title
                slug
                description
                featuredImage
                authors{
                    name
                    description
                    picture
                }}
            }
          }
        `,
			}),
		}),
	};
  const posts = await data.posts.json();
  const results = posts.data.listPosts.data;

  console.log(results);

	return results;
};

export default function PostItem() {
	const results = useLoaderData();
	return (
		<>
			<h1>Posts</h1>
			<ul>
				{results.map((post) => (
					<li key={post.slug}>
						<Link to={post.slug}>{post.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
