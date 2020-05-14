import React from 'react'

const Book = () => (
  <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://i.pinimg.com/236x/0c/ee/7e/0cee7e54fda8ac99ec11459448e89c7d.jpg" alt="" />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          No Place like Here
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/78be1759-2624-4b20-b237-1bab3c934b2f.jpg" alt="author" />
              </div>
            </div>
            <span className="small">Christin June</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="http://www.test.com">$ 20USD</a>
        </div>
      </div>
  </article>
)

export default Book