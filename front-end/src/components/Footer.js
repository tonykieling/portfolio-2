
// export default function Footer({ getFooterHeight }){
export default function Footer(){
    const year = () => {
        const d = new Date(Date.now());
        return d.getFullYear();
    }
  
    return (
        <footer className="signature mt-4" id = "footer" >
            Tony Kieling<span>™️ - { year() } </span>
        </footer>
    );
}