import React, { useEffect } from "react";
import logo from "./logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Rough from "./components/Rough";
// import {folder} from "./components/RoughConstants";
import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import CartRouter from "./components/Cart/CartRouter";
  import Resize from "./components/Misc/Resize"; 
  import StaticComp from "./components/Misc/StaticComp";
  import {CartContextProvider} from "./components/Cart/CartBody/CartContext";
  import InfiniteScroll from "./components/Generic/InfinitScroll/InfiniteScroll";

function App() {

    return (
        <section>
            <CartContextProvider>
                <CartRouter />
            </CartContextProvider>
            <Resize />
            <StaticComp />
            {/* <Rough folder={folder}/> */}
            <InfiniteScroll />
        </section>
    );
}

export default App;


            // <BrowserRouter>
            //     <Routes>
            //         <Route path="/material" element={<Material/>}/>
            //         <Route path="/mouse-move" element={<MouseMove/>}/>
            //         <Route path="/todo-app" element={<TodoContextProvider><TodoApp /></TodoContextProvider>}/>
            //         <Route path="/quote" element={<Quote/>}/>
            //         <Route path="/" element={<GotoComponent/>}/>
            //     </Routes>
            // </BrowserRouter>