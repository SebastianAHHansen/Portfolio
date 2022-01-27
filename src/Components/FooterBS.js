import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span><h5> Get connected with me on social networks:</h5></span>
        </div>

        <div>
          <a rel="noopener noreferrer" href="https://github.com" target="_blank"  className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
          <a rel="noopener noreferrer" href="https://facebook.com" target="_blank" className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>

          <a rel="noopener noreferrer" href="https://instagram.com" target="_blank" className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a rel="noopener noreferrer" href="https://linkedin.com" target="_blank" className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </section>
    </MDBFooter>
  );
}