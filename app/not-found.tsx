/*
//. In addition to catching expected notFound() errors, 
//. the root app/not-found.js file also handles any unmatched URLs for your whole application. 
//. This means users that visit a URL that is not handled by your app will be shown the UI exported by the app/not-found.js file.
*/

export default function NotFound() {
  return <div>NotFoundPage</div>;
}
