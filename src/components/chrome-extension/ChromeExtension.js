import { Card, Row, Col } from 'reactstrap';
import { PARAGRAPHS } from './PARAGRAPHS';
import { useState } from 'react';

const ChromeExtension = () => {
    const [text, setText] = useState(PARAGRAPHS[0].text);
    const [bionic, setBionic] = useState(false);

    const bionicCheckbox = () => {
        setBionic(!bionic);
    }

    const BionicRender = () => {
        const words = text.split(" ");
        return (bionic === false) ?
            ( 
                <p>{text}</p>
            ) :
            (
                <>
                    {
                        words.map((word) => {
                            const halfLength = Math.ceil(word.length / 2);
                            const firstHalf = word.slice(0, halfLength);
                            const secondHalf = word.slice(halfLength);
                            return (
                                <>
                                    <p className='bionic'><span className='bionicBold'>{firstHalf}</span>{secondHalf} </p>
                                </>
                            )
                        })
                    }
                </>
            )
    }

    return (
        <Row className='chrome-extension'>
            <Col xs='6'>
                <BionicRender />
            </Col>
            <Col xs='6'>
                <Card>
                    <h6>FOCUS READER</h6>
                    <hr />
                    <p>Bionic</p>
                    <label class="switch">
                        <input type="checkbox" id="bionic" onChange={bionicCheckbox}/>
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