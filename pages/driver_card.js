const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Driver ID", href: "#" },
    description: "Test",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Example() {
  return (
    <div className="relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl ">
        <div className=" mt-12 flex flex-row max-w-lg lg:max-w-none gap-5  w-2/6">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg w-72 ">
              <div className="flex flex-1 flex-col justify-between bg-white shadow-md pb-3 ">
                <div className="flex-1 border-b-2 border-grey-500 pb-2">
                  <p className="text-sm  text-neutral-400 ml-3 pt-3">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                </div>
                <div className="pt-4 ml-3">
                  <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <a href={post.href} className="mt-2 block">
                    <p className="ml-3 text-neutral-500">Nama Driver</p>
                    <p className="ml-3 text-base">{post.description}</p>
                  </a>
                </div>
                <div>
                  <a href={post.href} className="mt-2 block">
                    <p className="ml-3 text-neutral-500">Telepon</p>
                    <p className="ml-3 text-base">{post.description}</p>
                  </a>
                </div>
                <div>
                  <a href={post.href} className="mt-2 block">
                    <p className="ml-3 text-neutral-500">Email</p>
                    <p className="ml-3 text-base">{post.description}</p>
                  </a>
                </div>
                <div>
                  <a href={post.href} className="mt-2 block">
                    <p className="ml-3 text-neutral-400">Tanggal Lahir</p>
                    <p className="ml-3 text-base">{post.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
