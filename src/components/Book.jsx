import React from 'react';
import './Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    title, author, percentage, chapter,
  } = props;

  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    percentage: PropTypes.number,
    chapter: PropTypes.string,
  };

  Book.defaultProps = {
    percentage: 69,
    chapter: '17',
  };

  return (
    <div className="book-container">
      <div className="card-body book-card-body">
        <div className="row">
          <div className="book-data col-5">
            <span className="action-text">Action</span>
            <span className="action-header">{title}</span>
            <span className="action-sub-text">{author}</span>
            <div className="book-data-cta">
              <Link className="action-link first-link" to="/">
                Comment
              </Link>
              <Link className="action-link second-link" to="/">
                Remove
              </Link>
              <Link className="action-link third-link" to="/">
                Edit
              </Link>
            </div>
          </div>
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
          <div className="book-chapter col-4">
            <span className="chapter-description">Current Chapter</span>
            <span className="Lesson-Panel">
              Chapter
              {chapter}
            </span>
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
