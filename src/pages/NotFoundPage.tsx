import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      "
    >
      <div className="text-center">

        <h1 className="text-8xl font-bold text-amber-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="
          inline-block
          mt-8
          bg-amber-600
          text-white
          px-8
          py-4
          rounded-xl
          "
        >
          Back To Home
        </Link>

      </div>
    </div>
  );
}