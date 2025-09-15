import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import ProductsDetails from "./pages/ProductsDetails";

function App() {


  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/productspage">
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductsDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  )
}

export default App
