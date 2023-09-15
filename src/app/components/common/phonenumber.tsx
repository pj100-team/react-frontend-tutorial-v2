import React, { useState } from "react";

interface Props {
    content: string;
}

const PhoneNumber: React.FC<Props> = ({
    content,
}) => {
    const [text, setText] = useState("");
    const handleSubmit = () => (
        alert("入力したのは" + text)
    )

    return(
        <form onSubmit={handleSubmit}>
            <label>
                {content}:
                    <input
                        type="text"
                        value={text}
                        pattern="[0-9]{11}"
                        onChange={(event) => setText(event.target.value)}
                    />
            </label>
            <input type="submit" value="入力" />
        </form>
    )
};

export default PhoneNumber;