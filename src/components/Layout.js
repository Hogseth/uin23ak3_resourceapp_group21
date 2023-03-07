import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div id="container">
            <header>

                <Link>
                
                <h1>Ressursarkiv</h1>

                </Link>

            </header>

            <main>
                <Outlet/>
            </main>

                <footer>

                </footer>
        </div>
    )
}