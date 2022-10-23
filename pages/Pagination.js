// export default function Pagination({
//   postsPerPage,
//   totalPosts,
//   paginateFront,
//   paginateBack,
//   currentPage,
// }) {
//   return (
//     <div className="py-2">
//       <div>
//         <p className="text-sm text-gray-700">
//           Showing
//           <span className="font-medium">{currentPage * postsPerPage - 10}</span>
//           to
//           <span className="font-medium"> {currentPage * postsPerPage} </span>
//           of
//           <span className="font-medium"> {totalPosts} </span>
//           results
//         </p>
//       </div>
//       <nav className="block"></nav>
//       <div>
//         <nav
//           className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
//           aria-label="Pagination"
//         >
//           <a
//             onClick={() => {
//               paginateBack();
//             }}
//             href="#"
//             className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//           >
//             <span>Previous</span>
//           </a>

//           <a
//             onClick={() => {
//               paginateFront();
//             }}
//             href="#"
//             className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//           >
//             <span>Next</span>
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// }

export default function Example() {
  return (
    <nav
      className="flex items-center justify-between  bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="flex flex-1 place-content-center">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </nav>
  );
}
