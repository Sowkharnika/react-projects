function Header({title,tagline}) {
    return (
        <div>
    <h1 className="heading">{title}</h1>
    <p className="tagline">{tagline}</p>
    </div>
    ); 
}
export default Header;