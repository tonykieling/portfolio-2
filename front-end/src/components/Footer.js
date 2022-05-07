import { useEffect, useRef } from "react"

export default function Footer({ getFooterHeight }){
  const footerRef = useRef(null);

  useEffect(() => footerRef && getFooterHeight(footerRef.current.clientHeight + 1), [ footerRef ]);


  return (
    // <div style={frame}>
      <div className="signature" id = "footer" ref = { footerRef }>
        Tony Kieling<span>&nbsp;™️ - 2022</span>
      {/* </div> */}
    </div>
  )
}