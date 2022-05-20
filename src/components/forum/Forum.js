import { memo } from "react"
import ForumContent from "./forumContent/ForumContent"
import Sidebar from "./sidebar/Sidebar"

const Forum = () => {
    console.log("%cForum", 'background: darkgreen; color: white;')
    const css_section = "relative z-10 bg-whiteColorBg flex justify-center items-center"
    const css_div = "flex justify-center items-start flex-col gap-3 wGolbal lg:flex-row"

    return(
        <section className={css_section}>
            <div className={css_div}>
                <ForumContent />
                <Sidebar />
            </div>
        </section>
    )
}

export default memo(Forum)