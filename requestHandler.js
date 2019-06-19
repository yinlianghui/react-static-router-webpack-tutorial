import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
// import { App } from './src/Components'
import App from "./src/App";
import fs  from "fs";
import DomParser from 'dom-parser';
import parse from 'html-react-parser';

function handleRender(req,res) {
	// first create a context for <StaticRouter>, it's where we keep the
  // results of rendering for the second pass if necessary
  const context = {}
  // render the first time
  let html = new DomParser().parseFromString(fs.readFileSync('./dist/index.html', 'utf-8'), 'text/html').rawHTML;
  let markup = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      {parse(html)}
    </StaticRouter>
  )

  // the result will tell you if it redirected, if so, we ignore
  // the markup and send a proper redirect.
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(markup)
    res.end()
  }
}
module.exports = handleRender;

