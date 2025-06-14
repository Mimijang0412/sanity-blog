import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
// import BlockContent from '@sanity/block-content-to-react';
import { PortableText } from '@portabletext/react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

export default function SinglePost() {
	const [singlePost, setSinglePost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage {
            asset-> {
              _id,
              url
            }
          },
          body,
          "name" : author->name,
          "authorImage" : author->image{
                asset->{
            _id,
            url
          }}
          }`
			)
			.then((data) => setSinglePost(data[0]))
			.catch(console.log);
	}, [slug]);

  if(!singlePost) return <div>Loading...</div>
  console.log(singlePost.body)


	return (
  <main className='bg-gray-200 min-h-screen p-12'>
    <article className='container shadow-lg mx-auto bg-white rounded-lg'>
      <header className='relative'>
        <div className='absolute h-full w-full flex items-center justify-center p-8'>
          <div className='bg-white bg-opacity-75 rounded p-12'>
            <h1 className='cursive text-3xl lg:text-6xl mb-4'>
              {singlePost.title}
            </h1>
            <div className='flex justify-center text-gray-800'>
              {singlePost.authorImage && <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className='w-10 f-10 rounded-full'/>}
            <p className='cursive flex items-center pl-2 text-2xl'>
              {singlePost.name}
            </p>
            </div>
          </div>
        </div>
        <img src={singlePost.mainImage.asset.url} alt={singlePost.title} 
        className='w-full object-cover rounded-t'
        style={{height: "400px"}}/>
      </header>
      
      <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
       {singlePost.body && Array.isArray(singlePost.body) && (
        <PortableText value={singlePost.body} projectId="8xk09a8e" dataset="production" />
       )}
      </div>
    </article>
  </main>
  );
}
