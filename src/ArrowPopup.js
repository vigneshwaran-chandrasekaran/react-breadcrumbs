import React, { useRef } from 'react';

export default function ArrowPopup({ data }) {
    const arrowBox = useRef();

    function hideOtherPopups() {
        const elems = document.querySelectorAll(".breadcrumb-arrow .arrow-box.show");
        for (const el of elems) {
            el.classList.remove("show");
        }
    }

    function handleClick() {
        hideOtherPopups();
        arrowBox.current.classList.add("show");
    }

    return (
        <>
            <span className="arrow" onClick={handleClick}>&gt;</span>
            <div className="arrow-box" ref={arrowBox}>
                <ol className='popup-links'>
                    {data.map(({ id, name }) => (
                        <li key={id}>
                            <a href="/">{name}</a>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}
