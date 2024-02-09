import React, { Suspense} from "react";

const HomeContent = React.lazy(() => import("../components/HomeContent"));

const Home = () => {
  return (
    <Suspense >
      <HomeContent />
    </Suspense>
  );
};
export default Home;
