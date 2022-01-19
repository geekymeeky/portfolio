import React from "react";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen pb-10 px-8 bg-purple"
      id="contact"
    >
      <div className="flex flex-1 items-center justify-center flex-col">
        <h1 className="font-medium text-4xl text-black pt-8 md:pt-0">
          Keep in Touch
        </h1>
        <h5 className="text-black text-lg">
          Speak to me if you have any questions
        </h5>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-1 items-center justify-center flex-col p-12">
          <h5 className="font-light text-lg">
            Feel free to reach out to me. Please do not hesitate to contact me
            if you require assistance. Have a question about the services I
            offer? I'm only a mouse click away.
          </h5>
        </div>
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-black text-sm mb-2 font-medium"
                for="grid-name"
              >
                Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-name"
                type="text"
                placeholder="John"
              />
            </div>
            <div class="w-full px-3">
              <label
                class="block tracking-wide text-black text-sm font-medium mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="grid-message"
              >
                Message
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-message"
                placeholder="Message"
              />
            </div>
          </div>
          <button className="block uppercase shadow bg-black hover:bg-green-500 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
