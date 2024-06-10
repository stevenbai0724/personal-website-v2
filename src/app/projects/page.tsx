import "../globals.css";
import NavbarComponent from "../../components/Navbar";
import FooterComponent from "@/components/Footer";

export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavbarComponent></NavbarComponent>
            <div className="w-full max-w-3xl md:mt-16 mt-8 items-center justify-between min-h-screen">

                <h1 className="text-2xl pt-5 px-5">Projects</h1>

            </div>

            <FooterComponent></FooterComponent>
        </main>
    )
}