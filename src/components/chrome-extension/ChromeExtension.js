import { Card, Row, Col, Button } from 'reactstrap';
import { PARAGRAPHS } from './PARAGRAPHS';
import { useState } from 'react';

const ChromeExtension = () => {
    const text = PARAGRAPHS[0].text;
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
                    <h6 className='font-weight-bold'>Sample Text</h6>
                    <p>{text}</p>
                </div>
            ) :
            (
                <div style={styles} className='bionic'>
                    <h6 className='font-weight-bold'>Sample Text</h6>
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
        <>
            <Row className='text-center project-header'>
                <h4>Chrome extension which alters text in the browser
                <a href='https://github.com/effieguenther/focusReader'>(see the code)</a></h4>
            </Row>
            <Row className='my-3'>
                <Col>
                    <Card className='sample-text'>
                        <BionicRender />
                    </Card>
                </Col>
                <Col sm='4' xs='6'>
                    <Card  className='chrome-extension d-flex align-items-center py-2'>
                        <h6>FOCUS READER</h6>
                        <p>Bionic</p>
                        <label class="switch">
                            <input type="checkbox" id="bionic" onChange={bionicCheckbox}/>
                            <span class="slider"></span>
                        </label>
                        <p>Change Font</p>
                        <select name="fonts" className='text-center' onChange={fontMenu}>
                            <option value="">Default</option>
                            <option value="arial">Arial</option>
                            <option value="helvetica">Helvetica</option>
                            <option value="Comic Sans MS">Comic Sans MS</option>
                        </select>
                        <div className='text-center'>
                            <p>Letter Spacing</p>
                            <Button onClick={decreaseLetterSpacing}>-</Button>
                            <Button onClick={increaseLetterSpacing}>+</Button>
                            <p>Line Spacing</p>
                            <Button onClick={decreaseLineHeight}>-</Button>
                            <Button onClick={increaseLineHeight}>+</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ChromeExtension;