import { useContext } from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { GlobalContext } from "../context/GlobalContext";



export function Dashboard() {

    const {isLoggedIn} = useContext(GlobalContext);

    

    return (
        <>
            <Header />
            {
                isLoggedIn && 
                <main>
                <h1>Dashboard</h1>
                <p>Sita puslapi mato tik prisijunge vartotojai</p>
            </main>
            }
            {
                !isLoggedIn && 
                <main>
                <h1>401</h1>
                <p>Sita puslapi mato tik prisijunge vartotojai, eik i LOGIN puslapi</p>
            </main>
            }        
            
            <Footer />
        </>
    );
}