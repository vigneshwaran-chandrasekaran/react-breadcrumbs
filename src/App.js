import React, { Fragment } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ArrowPopup from './ArrowPopup';

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

function App() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#" className='mr-3'>Home</Breadcrumb.Item>
        {links.map(({ id, name }, i) => (
          <Fragment key={id}>
            <Breadcrumb.Item title={name} href="/">
              {name}
            </Breadcrumb.Item>
            {(links.length - 1) > i &&
              <li className='breadcrumb-arrow'>
                <ArrowPopup data={links.slice(i, links.length)} />
              </li>
            }
          </Fragment>
        ))}
      </Breadcrumb>
    </>
  );
}

export default App;
