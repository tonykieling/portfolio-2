import { useRef, useLayoutEffect } from "react"

export default function Footer({ getFooterHeight }){
  const footerRef = useRef(null);

  useLayoutEffect(() =>
    footerRef && getFooterHeight(footerRef.current.clientHeight + 1)
  // eslint-disable-next-line
  , [ footerRef ]);


  return (
    // <div style={frame}>
      <div className="signature" id = "footer" ref = { footerRef }>
        Tony Kieling<span>&nbsp;™️ - 2022</span>
      {/* </div> */}
    </div>
  )
}