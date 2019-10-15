import React, { Fragment, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { func } from 'prop-types';

function Arrow({ data }) {
  console.log({ data });
  const [popup, togglePopup] = useState(false);

  function hideOtherPopups() {
    const elems = document.querySelectorAll(".breadcrumb-custom-item .arrow-box.show");
    console.log({ elems });
    [].forEach.call(elems, function (el) {
      el.classList.remove("show");
    });
  }

  function handleClick() {
    hideOtherPopups();
    console.log('object');
    togglePopup(!popup);
  }

  return (
    <>
      <span className="arrow" onClick={handleClick}>&gt;</span>
      <div className={popup ? "arrow-box show" : "arrow-box"}>
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

function App() {
  const links = [
    {
      id: 1,
      name: 'one'
    }, {
      id: 2,
      name: 'two'
    }, {
      id: 3,
      name: 'three'
    }, {
      id: 4,
      name: 'two'
    }, {
      id: 5,
      name: 'three'
    },
  ];
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        {links.map(({ id, name }, i) => (
          <Fragment key={id}>
            <li className='breadcrumb-custom-item'>
              <Arrow data={links.slice(i, links.length)} />
            </li>
            <Breadcrumb.Item title={name} href="/">
              {name}
            </Breadcrumb.Item>
          </Fragment>
        ))}
      </Breadcrumb>
      <div className="box arrow-top-center"></div>
      <div className="arrow-box"></div>
    </>
  );
}

export default App;
