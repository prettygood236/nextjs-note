//. loading.js will automatically wrap the page.js file and any children below in a React <Suspense> boundary. (Suspense : Waiting / Delay handling)
//. loading.js is not very meaningful for SSG pages.
//. Or if the loading.js page itself is too large, you can use Suspense to show partial loading.

export default function ProductLoading() {
  return <div>로딩 중 입니다...</div>;
}
