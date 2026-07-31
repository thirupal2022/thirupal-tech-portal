import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Message submitted successfully");
  };

  return (
    <>
      <Helmet>
        <title>Contact | ThirupalTech</title>
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-4">
            Contact Me
          </h1>

          <p className="text-gray-600 mb-12">
            Let's connect and discuss technology,
            education, community initiatives and
            opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                placeholder="Name"
                className="w-full border p-4 rounded-xl"
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value
                  })
                }
              />

              <input
                placeholder="Email"
                className="w-full border p-4 rounded-xl"
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value
                  })
                }
              />

              <input
                placeholder="Subject"
                className="w-full border p-4 rounded-xl"
                onChange={(e) =>
                  setForm({
                    ...form,
                    subject: e.target.value
                  })
                }
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="w-full border p-4 rounded-xl"
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value
                  })
                }
              />

              <button
                className="
                bg-amber-600
                text-white
                px-8
                py-4
                rounded-xl
                "
              >
                Send Message
              </button>
            </form>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <p>Email: your-email@example.com</p>
                <p>Location: India</p>
                <p>LinkedIn: /in/thirupalreddy</p>
                <p>GitHub: github.com/thirupaltech</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}