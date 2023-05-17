import { useRef, useLayoutEffect } from "react"

export default function Footer({ getFooterHeight }){
  const footerRef = useRef(null);

  useLayoutEffect(() =>
    footerRef && getFooterHeight(footerRef.current.clientHeight + 1)
  // eslint-disable-next-line
  , [ footerRef ]);

  const year = () => {
    const d = new Date(Date.now());
    return d.getFullYear();
  }
  
  return (
    // <div style={frame}>
      <div className="signature" id = "footer" ref = { footerRef }>
        Tony Kieling<span>™️ - {year()} </span>
      {/* </div> */}
    </div>
  )
}