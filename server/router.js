import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../shared/routes';

export default (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const app = renderToString(<RouterContext { ...props } />);

      const html = `
      <html lang="en">
        <head>
            <title></title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
          <div id="react-app">${app}</div>
          <script type="text/javascript" src="/static/bundle.js"></script>
        </body>
      </html>`;

      res.send(html);

    } else {
      res.status(404).send('Not found');
    }
  });
};


