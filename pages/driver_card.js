const Datas = (props) => {
  console.log(props.list);
  //   console.log(Object.keys(props.list(user)));
  return (
    <div className="relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-auto">
        <div className=" mt-12 flex flex-row max-w-lg lg:max-w-none gap-5  w-2/6">
          {props.list &&
            props.list.map((user, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg"
                style={{ minWidth: "-webkit-fill-available" }}
              >
                <div className="flex flex-1 flex-col justify-between bg-white shadow-md pb-3 ">
                  <div className="flex-1 border-b-2 border-grey-500 pb-2">
                    <p className="text-sm ml-3 pt-3 flex">
                      <a className="hover:underline text-neutral-400 mr-3">
                        Shipper ID{" "}
                      </a>
                      <p className="text-red-600">{user.login.salt}</p>
                    </p>
                  </div>
                  <div className="pt-4 ml-3">
                    <img
                      className="inline-block h-14 w-14 rounded-full"
                      src={user.picture.medium}
                      alt=""
                    />
                    {/* <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span> */}
                  </div>
                  <div>
                    <a className="mt-2 block">
                      <p className="ml-3 text-neutral-500">Nama Driver</p>
                      <p className="ml-3 text-base">
                        {user.name.first}, {user.name.last}
                      </p>
                    </a>
                  </div>
                  <div>
                    <a className="mt-2 block">
                      <p className="ml-3 text-neutral-500">Telepon</p>
                      <p className="ml-3 text-base">
                        {user.phone} | {user.cell}
                      </p>
                    </a>
                  </div>
                  <div>
                    <a className="mt-2 block">
                      <p className="ml-3 text-neutral-500">Email</p>
                      <p className="ml-3 text-base">{user.email}</p>
                    </a>
                  </div>
                  <div>
                    <a className="mt-2 block">
                      <p className="ml-3 text-neutral-400">Tanggal Lahir</p>
                      <p className="ml-3 text-base">{user.dob.date}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Datas;
