import { Link } from "react-router-dom"

var PageLink = ({children, ...props}) => {
    return <div>
        <Link {...props} className="hover:text-slate-400 transition-colors">{children}</Link>
    </div>
}

export default PageLink;