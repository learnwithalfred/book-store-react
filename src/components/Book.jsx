import React from 'react';
import './Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Book() {
  const percentage = 64;
  return (
    <div className="book-container">
      <div className="card-body">
        <div className="row">
          <div className="book-data col-6">a</div>
          <div className="book-progress col-3">
            <div className="Rectangle-3">
              <div style={{ width: 50, height: 50, marginRight: 5 }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
            </div>
            <div className="percentage">
              <span className="-Percent-Complete">{`${percentage}%`}</span>
              <span className="Completed Text-Style-2">Completed</span>
            </div>
          </div>
          <div className="book-chapter col-3">
            <span className="chapter-description">Current Chapter</span>
            <span className="Lesson-Panel">Chapter 17</span>
            <button type="button" className="btn btn-primary Update-progress">
              Update progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
