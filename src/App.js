import React, { Fragment } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ArrowPopup from './ArrowPopup';

const links = [
  {
    id: 1,
    name: 'one think and many more long link that will wrap'
  }, {
    id: 2,
    name: 'two three'
  }, {
    id: 3,
    name: '3'
  }, {
    id: 4,
    name: 'to'
  }, {
    id: 5,
    name: 'some random text'
  },
];

function App() {
  const dots = links.length > 3 ? 'breadcrumb-dots' : '';
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#" className='mr-3'>Home</Breadcrumb.Item>
        {links.map(({ id, name }, i) => (
          <Fragment key={id}>
            <Breadcrumb.Item className={dots} title={name} href="/">
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
