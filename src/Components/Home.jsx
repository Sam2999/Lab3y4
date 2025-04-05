import WelcomeWidgets from "./WelcomeWidgets";



export default function Home({email}) {
    return (
        <>
        <h1>Your at Home</h1>
        <WelcomeWidgets email = {email} />
        </>
    );
}