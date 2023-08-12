import { Card, Row, Col } from 'reactstrap';
import { PARAGRAPHS } from './PARAGRAPHS';
import { useState } from 'react';

const ChromeExtension = () => {
    const [text, setText] = useState(PARAGRAPHS[0].text);
    const [bionic, setBionic] = useState(false);
    const [font, setFont] = useState('default');
    const [lineHeight, setLineHeight] = useState(1.2);
    const [letterSpacing, setLetterSpacing] = useState(0);

    const bionicCheckbox = () => {
        setBionic(!bionic);
    }

    const fontMenu = (e) => {
        setFont(e.target.value);
    }

    const increaseLineHeight = () => {
        const newHeight = parseInt(lineHeight) + 1;
        setLineHeight(newHeight);
    }

    const decreaseLineHeight = () => {
        const newHeight = parseInt(lineHeight) - 1;
        setLineHeight(newHeight);
    }

    const increaseLetterSpacing = () => {
        const newSpacing = parseInt(letterSpacing) + 1;
        setLetterSpacing(newSpacing);
    }

    const decreaseLetterSpacing = () => {
        const newSpacing = parseInt(letterSpacing) - 1;
        setLetterSpacing(newSpacing);
    }

    const styles = {
        fontFamily: font,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing
    }

    //conditional rendering of text from the stateful variable 'bionic'
    const BionicRender = () => {
        const words = text.split(" ");
        return (bionic === false) ?
            ( 
                <div style={styles}>
                    <p>{text}</p>
                </div>
            ) :
            (
                <div style={styles} className='bionic'>
                    {
                        words.map((word) => {
                            const halfLength = Math.ceil(word.length / 2);
                            const firstHalf = word.slice(0, halfLength);
                            const secondHalf = word.slice(halfLength);
                            return (
                                <>
                                    <p className='bionic'>
                                        <span className='bionicBold'>{firstHalf}</span>{secondHalf} </p>
                                </>
                            )
                        })
                    }
                </div>
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
                    <select name="fonts" id="fonts" onChange={fontMenu}>
                        <option value="">Default</option>
                        <option value="arial">Arial</option>
                        <option value="helvetica">Helvetica</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                    </select>
                    <p>Letter Spacing</p>
                    <button onClick={decreaseLetterSpacing}>-</button>
                    <button onClick={increaseLetterSpacing}>+</button>
                    <p>Line Spacing</p>
                    <button onClick={decreaseLineHeight}>-</button>
                    <button onClick={increaseLineHeight}>+</button>

                </Card>
            </Col>
        </Row>
    )
}

export default ChromeExtension;