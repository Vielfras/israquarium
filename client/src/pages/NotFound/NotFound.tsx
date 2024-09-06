import './NotFound.scss';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Sorry, We could not find the page you were looking for.</p>
    </div>
  );
}
