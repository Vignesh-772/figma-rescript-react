import { Builder } from "../Builder";
import { DomProps } from "../Types";


function getTextProps(builder :Builder,dom: SceneNode) {
    const props: DomProps = {
        props: [],
        textStyle: [],
        styles: []
    };
    if ((dom as TextNode)) {
        const textNode = dom as TextNode;
        if (textNode.textAlignHorizontal) {
            props.textStyle.push(builder.buildProp({
                key: 'textAlign',
                value: textAlignHorizontal[textNode.textAlignHorizontal]
            }))
        }
        if (textNode.textAlignVertical) {
            props.textStyle.push(builder.buildProp({
                key: 'textAlignVertical',
                value: textAlignVertical[textNode.textAlignVertical]
            }))

        }
        if (textNode.textAutoResize) {
            props.textStyle.push(builder.buildProp({
                key: 'verticalAlign',
                value: textAlignVertical[textNode.textAlignVertical]
            }))

        }
        if (textNode.textTruncation) {
            if (textNode.textTruncation == "ENDING") {
                props.props.push(builder.buildProp({
                    key: 'ellipsizeMode',
                    value: '#tail'
                }))
            }

        }
        if (textNode.fontSize) {
            if (textNode.fontSize as number) {
                props.textStyle.push(builder.buildProp({
                    key: 'fontSize',
                    value: (textNode.fontSize as number).toFixed(1) + ""
                }))
            }

        }
        if (textNode.fontName) {
            if (textNode.fontName as FontName) {
                props.textStyle.push(builder.buildProp({
                    key: 'fontFamily',
                    value: JSON.stringify((textNode.fontName as FontName).family)
                }))
                props.textStyle.push(builder.buildProp({
                    key: 'fontStyle',
                    value: ((textNode.fontName as FontName).style == "italic") ? '#italic' : "#normal"
                }))
            }

        }
        if (textNode.fontWeight) {
            if (textNode.fontWeight as number) {
                props.textStyle.push(builder.buildProp({
                    key: 'fontWeight',
                    value: "#" + (textNode.fontWeight as number) + ""
                }))
            }

        }
        if (textNode.textCase) {
            if (textNode.textCase as TextCase) {
                props.textStyle.push(builder.buildProp({
                    key: 'textTransform',
                    value: textCase[(textNode.textCase as TextCase)]
                }))
            }

        }
        if (textNode.textDecoration) {
            if (textNode.textDecoration as TextCase) {
                props.textStyle.push(builder.buildProp({
                    key: 'textDecorationLine',
                    value: textDecoration[(textNode.textDecoration as TextDecoration)]
                }))
            }
        }
        if (textNode.letterSpacing) {
            if (textNode.letterSpacing as LetterSpacing) {
                props.textStyle.push(builder.buildProp({
                    key: 'letterSpacing',
                    value: (textNode.letterSpacing as LetterSpacing).value.toFixed(1)
                }))
            }

        }
        if (textNode.lineHeight) {
            if ((Object.prototype.hasOwnProperty.call(textNode.lineHeight,"value") && textNode.lineHeight as LetterSpacing)) {
                props.textStyle.push(builder.buildProp({
                    key: 'lineHeight',
                    value: (textNode.lineHeight as LetterSpacing).value.toFixed(1)
                }))
            }

        }
        if (textNode.maxLines) {
            props.props.push(builder.buildProp({
                key: 'numberOfLines',
                value: textNode.maxLines + ""
            }))

        }
        if (!textNode.textAlignVertical) {
            props.textStyle.push(builder.buildProp({
                key: 'textAlignVertical',
                value: "center"
            }))
        }
        props.textStyle.push(builder.buildProp({
            key: 'includeFontPadding',
            value: "true"
        }))
        return props;
    } else {
        return props;
    }

}

const textAlignHorizontal = {
    LEFT: '#left',
    RIGHT: '#right',
    CENTER: '#center',
    JUSTIFIED: '#justify'
}

const textAlignVertical = {
    TOP: '#top',
    CENTER: '#auto',
    BOTTOM: '#bottom'
}
const textCase = {
    'ORIGINAL': "#none",
    'UPPER': "#uppercase",
    'LOWER': "#lowercase",
    'TITLE': "#none",
    'SMALL_CAPS': "#capitalize",
    'SMALL_CAPS_FORCED': "#capitalize"
}

const textDecoration = {
    'NONE': "#none",
    'UNDERLINE': "#underline",
    'STRIKETHROUGH': "#line-through",
}

export default getTextProps;


