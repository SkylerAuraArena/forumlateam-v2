import logoLoupe from "../../../assets/images/logo-loupe.svg"

const TopbarContentExtraSearch = () => {
    console.log("%cNavbar -- Topbar -- TopbarContent -- Extra -- Search", 'background: white; color: green;')
    const topbarContentExtraSearchAnimation = "TopbarContentExtraSearch_in z-20"
    const css_mainDiv = `TopbarContentExtraSearch ${topbarContentExtraSearchAnimation} p-2.5 pt-9 bg-whiteColor absolute -top-5 right-0`
    const placeholder = "Search ..."
    const css_div = "flex items-center h-10 mr-1 pr-3 relative"
    const css_img = "search-submit imgTopbar-loupeImg-size z-20 absolute right-5"
    const imgSrc = logoLoupe
    const altImg = "Une image de loupe"

    return(
        <div className={css_mainDiv}>
            <form role="search" method="get" className="search-form flex pt-1" action="https://lateam.mikecodeur.com/">
                <label>
                    <input type="search" className="searchField bg-greyColor w-48 h-10 pl-3.5 pr-7 outline-none rounded text-sm" placeholder={placeholder} name="s" role="search" />
                </label>
                <div className={css_div}>
                    <input type="image" className={css_img} src={imgSrc} alt={altImg}/>
                </div>
            </form>
        </div>
    )
}

export default TopbarContentExtraSearch