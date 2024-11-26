export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>MorFilms &copy; {year} - All rights reserved</p>
        </footer>
    )
}