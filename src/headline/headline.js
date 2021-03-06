import React from 'react';
import Api from '../api-client'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import DeleteForever from '@material-ui/icons/DeleteForever';

export default ({ headline, deleteHeadline, deleteScraper, isActiveStatus, isActiveStatusScraper }) => {

  const deleteItem = (e) => {
    e.preventDefault();
    if (deleteHeadline) Api.deleteHeadline(headline.id)
    if (deleteScraper) Api.deleteScraper(headline.scraperID)
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  const activeStatus = () => {
    if (isActiveStatusScraper && !isActiveStatus) {
      return 'danger2';
    } else if (isActiveStatus && !isActiveStatusScraper) {
      return 'danger';
    } else if (isActiveStatus && isActiveStatusScraper) {
      return 'doubleDanger'
    }
  };

  return (
    < a
      className="anchor-link"
      href={headline.link}
      target="_blank"
    >
      <Card className='card__container' raised={true}>
        {(deleteScraper || deleteHeadline) &&
          <div onClick={deleteItem} className={`${activeStatus()} card__delete-button`}><DeleteForever /></div>
        }
        <CardMedia
          className="card__image"
          image={`${headline.image}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {headline.newspaper}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {headline.headline}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {headline.summary}
          </Typography> */}
        </CardContent>
      </Card>
    </a >
  )
}

