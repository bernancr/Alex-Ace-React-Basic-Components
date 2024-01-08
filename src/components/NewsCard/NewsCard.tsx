import React from 'react';
import '../../components/NewsCard/newsCard.css';

function NewsCard() {
  return (
    <div id='newsCard' className="card col-8 col-sm-3 m-2">
      <a href='#' className="card-body text-center">
        <img className='imgNews' src='../assets/news/news.png' />
        <h5 className="card-title">NFL</h5>
        <p className="card-text text-wrap two-line-truncate">
          TNF NFL Betting Guide: New England Patriots vs Pittsburgh Steelers picks, predictions, odds & best bets
        </p>
      </a>
    </div>
  )
}

export default NewsCard;
