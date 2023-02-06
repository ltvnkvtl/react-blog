import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "app/providers/routes";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map(({ path, element}) => (
          <Route
            key={path}
            path={path}
            element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

