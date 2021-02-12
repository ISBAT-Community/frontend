import { Route, Redirect } from "react-router-dom";
// import Login from "../pages/login";

export const ProtectedRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

// export const ProtectedRoute = ({
//   component: Component,
//   authenticated,
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (authenticated) {
//           return <Component {...props} />;
//         } else {
//           return (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 component: Login
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };
