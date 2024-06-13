// import React from "react";
// import {navbar} from "./menu/Data"

// const Header = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
//               {navbar.map((items) => (
//                 <li class="nav-item main_li">
//                   {items?.submenu && items.submenu.length > 0 ? (
//                     <a class="nav-link active" aria-current="page" href="#">
//                       {items.navbar_name}
//                       {items?.submenu && items.submenu.length > 0 && ">"}
//                     </a>
//                   ) : (
//                     <p className="mb-0">{items.navbar_name}</p>
//                   )}
//                   {items?.submenu && items.submenu.length > 0 && (
//                     <ul className="inner_ul">
//                       {items?.submenu?.map((item) => (
//                         <li className="inner_li">
//                           <a href="">{item.submenu_name}</a>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//             <form className="d-flex" role="search">
//               <button className="btn btn-outline-success" type="submit">
//                 login
//               </button>
//               <button className="btn btn-outline-success" type="submit">
//                 sing up
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };
// export default Header;



import React from "react";

const Header = ({navbarItems}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              {navbarItems.map((items) => (
                <li class="nav-item main_li">
                  {items?.submenu && items.submenu.length > 0 ? (
                    <a class="nav-link active" aria-current="page" href="#">
                      {items.navbar_name}
                      {items?.submenu && items.submenu.length > 0 && ">"}
                    </a>
                  ) : (
                    <p className="mb-0">{items.navbar_name}</p>
                  )}
                  {items?.submenu && items.submenu.length > 0 && (
                    <ul className="inner_ul">
                      {items?.submenu?.map((item) => (
                        <li className="inner_li">
                          <a href="">{item.submenu_name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                login
              </button>
              <button className="btn btn-outline-success" type="submit">
                sing up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
