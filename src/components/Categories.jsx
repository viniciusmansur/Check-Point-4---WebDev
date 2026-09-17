import { FaTheaterMasks } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import { PiBoxingGloveFill } from "react-icons/pi";
import { FaGhost } from "react-icons/fa";

const Categories = () => {

    return (
        <section className="categories">
            <h2>Gêneros</h2>

            <div className="category-list">
                <div className="category-card">
                    <span className="category-icon"><FaTheaterMasks /></span>
                    <p>Suspense</p>
                </div>

                <div className="category-card">
                    <span className="category-icon"><IoHeartSharp /></span>
                    <p>Romance</p>
                </div>

                <div className="category-card">
                    <span className="category-icon"><PiBoxingGloveFill /></span>
                    <p>Ação</p>
                </div>

                <div className="category-card">
                    <span className="category-icon"><FaGhost /></span>
                    <p>Terror</p>
                </div>
            </div>
        </section>
    )
}

export default Categories