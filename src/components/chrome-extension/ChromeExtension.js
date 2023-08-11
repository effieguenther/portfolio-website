import { Card, Row, Col } from 'reactstrap';
import { PARAGRAPHS } from './PARAGRAPHS';
import { useState } from 'react';

const ChromeExtension = () => {
    const [text, setText] = useState(PARAGRAPHS[0].text);

    const bionicFunction = () => {
        console.log("bionicFunction called");        
        //for (let i = 0; i < PARAGRAPHS.length; i++) {
            const WORDS = text.split(" ");
            for (let j = 0; j < WORDS.length; j++) {
                const word = WORDS[j];
                //isolates the first half and second half of the word
                const halfLength = Math.ceil(word.length / 2);
                const firstHalf = word.slice(0, halfLength);
                const secondHalf = word.slice(halfLength);
                //replaces each word with the first half bolded
                WORDS[j] = `<b>${firstHalf}</b>${secondHalf}`;
            }
            //applies each half-bolded word back into the text content of the element
            const bionicText = WORDS.join(" ");
        //}
        setText(bionicText);
    }


    return (
        <Row className='chrome-extension'>
            <Col xs='6'>
                <p>{text}</p>
            </Col>
            <Col xs='6'>
                <Card>
                    <h6>FOCUS READER</h6>
                    <hr />
                    <p>Bionic</p>
                    <label class="switch">
                        <input type="checkbox" id="bionic" onChange={bionicFunction}/>
                        <span class="slider"></span>
                    </label>
                    <p>Change Font</p>
                    <select name="fonts" id="fonts">
                        <option value="">Default</option>
                        <option value="arial">Arial</option>
                        <option value="helvetica">Helvetica</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                    </select>
                    <p>Letter Spacing</p>
                    <button id="letterSmaller">-</button>
                    <button id="letterBigger">+</button>
                    <p>Line Spacing</p>
                    <button id="lineSmaller">-</button>
                    <button id="lineBigger">+</button>

                </Card>
            </Col>
        </Row>
    )
}

export default ChromeExtension;