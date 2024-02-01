import React, { useCallback, useState } from 'react'
import { useListPostsQuery, usePrefetch } from '../redux/api/postsApi';

export default function Posts() {
    const [page, setPage] = useState(0);
    const { data: posts, isLoading } = useListPostsQuery(page);
    const prefetchPage = usePrefetch('listPosts');

    const prefetchNext = useCallback(() => {
        prefetchPage(page + 1);
    }, [prefetchPage, page]);

    return (
        <>

            {
                posts?.map(post => <p>{JSON.stringify(post)}</p>)
            }
            <button onClick={() => setPage(prev => prev - 1)}>Prev</button>
            <button
                onClick={() => setPage(prev => prev + 1)}
                onMouseEnter={prefetchNext}
            >Next</button>
        </>
    )
}
