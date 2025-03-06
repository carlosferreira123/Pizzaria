import { Outlet } from "react-router"

export function AppLayout() {
    return (
        <div>
            <h1>Cabaçalho</h1>

            <div><Outlet/></div>
        </div>
    )
}