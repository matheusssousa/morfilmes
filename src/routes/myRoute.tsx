import { Navigate, Route, Routes } from "react-router";
import PageHome from "../pages/home";

export default function MyRoute() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<PageHome />} />
        </Routes>
    )
}