function HeaderDropdown(props)
{
    return(
        <>
        <li className="hover:text-blue-700">
            <a href="#">{props.title}</a>
        </li>
        </>
    )
}
export default HeaderDropdown