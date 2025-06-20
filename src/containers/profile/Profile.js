// import React, {useState, useEffect, lazy, Suspense} from "react";
// //import {openSource} from "../../portfolio";
// import Contact from "../contact/Contact";
// import Loading from "../loading/Loading";

// const renderLoader = () => <Loading />;
// const GithubProfileCard = lazy(() =>
//   import("../../components/githubProfileCard/GithubProfileCard")
// );
// export default function Profile() {
//   const [prof, setrepo] = useState([]);
//   function setProfileFunction(array) {
//     setrepo(array);
//   }

//   useEffect(() => {
//     if (openSource.showGithubProfile === "true") {
//       const getProfileData = () => {
//         fetch("/profile.json")
//           .then(result => {
//             if (result.ok) {
//               return result.json();
//             }
//           })
//           .then(response => {
//             setProfileFunction(response.data.user);
//           })
//           .catch(function (error) {
//             console.error(
//               `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
//             );
//             setProfileFunction("Error");
//             openSource.showGithubProfile = "false";
//           });
//       };
//       getProfileData();
//     }
//   }, []);
//   if (
//     openSource.display &&
//     openSource.showGithubProfile === "true" &&
//     !(typeof prof === "string" || prof instanceof String)
//   ) {
//     return (
//       <Suspense fallback={renderLoader()}>
//         <GithubProfileCard prof={prof} key={prof.id} />
//       </Suspense>
//     );
//   } else {
//     return <Contact />;
//   }
// }

import React, {useState, useEffect, lazy, Suspense} from "react";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setProf] = useState([]);
  const [showProfile, setShowProfile] = useState(true);

  useEffect(() => {
    const getProfileData = () => {
      fetch("/profile.json")
        .then(res => (res.ok ? res.json() : Promise.reject(res)))
        .then(data => setProf(data.data.user))
        .catch(error => {
          console.error(`${error} (GitHub contact section fallback triggered)`);
          setProf("Error");
          setShowProfile(false);
        });
    };
    getProfileData();
  }, []);

  if (showProfile && typeof prof !== "string") {
    return (
      <Suspense fallback={<Loading />}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  }

  return <Contact />;
}
