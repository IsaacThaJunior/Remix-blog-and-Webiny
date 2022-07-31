import { Link } from '@remix-run/react';

export default function Index() {
	return (
		<div className='my-40 ml-80  '>
			<h1 className="text-3xl mb-5 font-bold ">Welcome to my Remix App</h1>
			<Link to='/posts'>
				<button className='cursor-pointer  inline-flex items-center py-2 px-3 text-sm ml-50 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"'>Go to blog</button>
			</Link>
		</div>
	);
}
