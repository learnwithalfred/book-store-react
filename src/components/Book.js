import React from 'react';
import './Book.css';
import { useDispatch } from 'react-redux';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

function Book(props) {
  const {
    id, title, author, percentage, chapter, category,
  } = props;

  const dispatch = useDispatch();

  Book.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    percentage: PropTypes.number,
    chapter: PropTypes.string,
  };

  Book.defaultProps = {
    percentage: 69,
    chapter: '17',
  };

  const removeHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">
      <div className="card-body book-card-body">
        <div className="row book-content">
          <div className="book-data col-5">
            <span className="action-text">{category}</span>
            <span className="action-header">{title}</span>
            <span className="action-sub-text">{author}</span>
            <div className="book-data-cta">
              <Link className="action-link first-link" to="/">
                Comment
              </Link>
              <button
                onClick={removeHandler}
                type="button"
                className="action-link second-link remove-book-button"
              >
                Remove
              </button>
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
              Update Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
