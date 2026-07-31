import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function BlogDetailsPage() {
  const { slug } = useParams();

  return (
    <>
      <Helmet>
        <title>{slug} | ThirupalTech</title>
      </Helmet>

      <article className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="mb-10">
            <span className="text-amber-600">
              AWS Cloud
            </span>

            <h1 className="text-5xl font-bold mt-4">
              AWS Cloud Practitioner Complete Guide
            </h1>

            <p className="mt-4 text-gray-500">
              Published by Thirupal Reddy
            </p>
          </div>

          <div className="h-96 bg-gray-200 rounded-2xl mb-10" />

          <div className="prose max-w-none">
            <h2>Introduction</h2>

            <p>
              This article introduces AWS Cloud
              Practitioner concepts and cloud fundamentals.
            </p>

            <h2>Core Services</h2>

            <ul>
              <li>EC2</li>
              <li>S3</li>
              <li>IAM</li>
              <li>CloudFront</li>
              <li>Route53</li>
            </ul>

            <h2>Conclusion</h2>

            <p>
              AWS Cloud Practitioner is the ideal starting
              point for cloud careers.
            </p>
          </div>

        </div>
      </article>
    </>
  );
}