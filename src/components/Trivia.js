export default function Trivia({ trivia }) {
    return(
        <div id="trivia">
            {
                trivia ?
                <>
                    <div className="centerText">
                        <span className="title">Category</span>
                        <span className="value">{trivia.category.title}</span>
                    </div>
                    <div className="centerText">
                        <span className="title">Points</span>
                        <span className="value">{trivia.value}</span>
                    </div>
                    <div className="centerText">
                        <span className="title">Answer</span>
                        <span className="value">{trivia.Question}</span>
                    </div>
                </>
                : "Error Caught !"
            }

        </div>
    )
}