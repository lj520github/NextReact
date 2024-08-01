'use client';
import { useState } from 'react';
import { sculptureList } from './data';

export default function Gallery() {
    // const [index, setIndex] = useState(0);
    // const [showMore, setShowMore] = useState(false);

    const [store, setStore] = useState({ index: 0, showMore: false });

    const hasNext = store.index < sculptureList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setStore({ ...store, index: store.index + 1 });
        } else {
            setStore({ ...store, index: 0 });
        }
    }

    function handleMoreClick() {
        setStore({ ...store, showMore: !store.showMore });
    }

    let sculpture = sculptureList[store.index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({store.index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {store.showMore ? 'Hide' : 'Show'} details
            </button>
            {store.showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}

